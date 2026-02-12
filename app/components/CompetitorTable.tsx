import React, { useState } from 'react';
import { competitors, categories, type CompetitorCategory } from '../data/competitors';

export const CompetitorTable = ({ search }: { search: string }) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<CompetitorCategory | 'All'>('All');

  const filtered = competitors.filter(c => {
    const matchesSearch = !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="category-filters">
        <button
          className={`category-pill ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All ({competitors.length})
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} ({competitors.filter(c => c.category === cat).length})
          </button>
        ))}
      </div>

      <div className="table-wrapper">
        <table className="comp-table">
          <thead>
            <tr>
              <th>Competitor</th>
              <th>Category</th>
              <th>Target</th>
              <th>Key Differentiation</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <React.Fragment key={c.name}>
                <tr
                  className={`row-clickable ${expandedRow === i ? 'row-active' : ''}`}
                  onClick={() => setExpandedRow(expandedRow === i ? null : i)}
                >
                  <td><strong>{c.name}</strong></td>
                  <td><span className="cat-badge">{c.category}</span></td>
                  <td>{c.target}</td>
                  <td>{c.diff} {expandedRow === i ? '\u25B4' : '\u25BE'}</td>
                </tr>
                {expandedRow === i && (
                  <tr className="row-detail">
                    <td colSpan={4}>
                      <div className="detail-grid">
                        <div className="detail-col">
                          <div className="detail-label">Proof Signals</div>
                          <p>{c.proofSignals}</p>
                        </div>
                        <div className="detail-col">
                          <div className="detail-label">Positioning Keywords</div>
                          <p>{c.keywords}</p>
                        </div>
                        <div className="detail-col full-width">
                          <div className="detail-label">Analysis</div>
                          <p>{c.analysis}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
