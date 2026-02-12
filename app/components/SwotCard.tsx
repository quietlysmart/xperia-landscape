import React from 'react';

export const SwotCard = ({ title, type, items }: {
  title: string;
  type: 's' | 'w' | 'o' | 't';
  items: string[];
}) => (
  <div className="card swot-item">
    <div className={`swot-badge swot-${type}`}>{type.toUpperCase()}</div>
    <h4 className="swot-title">{title}</h4>
    <div className="swot-body">
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  </div>
);
