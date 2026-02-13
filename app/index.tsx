import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import { Card } from './components/Card';
import { Accordion } from './components/Accordion';
import { SwotCard } from './components/SwotCard';
import { SegmentToggle } from './components/SegmentToggle';
import { CompetitorTable } from './components/CompetitorTable';
import { PositioningMap } from './components/PositioningMap';
import { OfferCard } from './components/OfferCard';
import { KeyInsight } from './components/KeyInsight';
import { StatCallout } from './components/StatCallout';

import { swotData } from './data/swot';
import { recommendations, productisedOffers } from './data/recommendations';
import { smbMap, enterpriseMap } from './data/positioning';
import { heroCopyOptions, linkedInHeadlines, linkedInOpeners } from './data/messaging';

type ViewMode = 'smb' | 'enterprise';

const NAV_ITEMS = [
  { id: 'summary', label: 'What This Means' },
  { id: 'market', label: 'Market View' },
  { id: 'competitors', label: 'Competitors' },
  { id: 'positioning', label: 'Market Position' },
  { id: 'comparison', label: 'SMB vs Enterprise' },
  { id: 'swot', label: 'SWOT Analysis' },
  { id: 'recommendations', label: 'Recommendations' },
  { id: 'messaging', label: 'Messaging Toolkit' },
  { id: 'appendix', label: 'Sources' },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [viewMode, setViewMode] = useState<ViewMode>('smb');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [competitorSearch, setCompetitorSearch] = useState('');

  // ScrollSpy for active nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-reveal animations via IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-children');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [viewMode]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const swot = swotData[viewMode];
  const recs = recommendations[viewMode];
  const offers = productisedOffers[viewMode];
  const mapData = viewMode === 'smb' ? smbMap : enterpriseMap;

  return (
    <div className="app-shell">
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="logo-container">
          <img src="./xperia-logo.png" alt="Xperia" className="logo-img" onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<span style="font-weight:700; font-size:1.2rem;">Xperia</span>';
          }} />
        </div>
        <button className="hamburger-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          <span className="bar" /><span className="bar" /><span className="bar" />
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header hidden-mobile">
          <img src="./xperia-logo.png" alt="Xperia" className="logo-img-desktop" onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.insertAdjacentHTML('afterbegin',
              '<div style="font-size:1.75rem; font-weight:700; color:#1e293b; margin-bottom:0.5rem;">Xperia</div>');
          }} />
          <div className="report-meta">
            <span>Competitor Landscape</span>
            <span className="meta-sub">Australia Report</span>
          </div>
        </div>
        <nav className="nav-menu">
          {NAV_ITEMS.map(item => (
            <button key={item.id} className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {mobileMenuOpen && <div className="overlay" onClick={() => setMobileMenuOpen(false)} />}

      {/* Main */}
      <main className="main-content">

        {/* Executive Summary */}
        <section id="summary" className="section-block">
          <div className="reveal">
            <span className="eyebrow">Executive Summary</span>
            <h1>People-first change and process improvement that sticks.</h1>
            <p className="lead subtitle">A competitive landscape analysis prepared for Xperia &mdash; here's what we found and what to do next.</p>
          </div>

          <div className="stats-row reveal">
            <StatCallout number="25" label="Competitors Analysed" />
            <StatCallout number="5" label="Market Categories" />
            <StatCallout number="3" label="Core Differentiators" />
          </div>

          <div className="grid-3 reveal-children">
            <Card title='The "Bundle" Differentiation' highlight>
              Xperia stands out by combining Change Management, Continuous Improvement, and CX under one roof. Competitors typically niche into just one. The "bundle" is a strong hook for owners seeing "messy growth."
            </Card>
            <Card title="The Credibility Gap" highlight>
              Current public proof (scorecards, templates) is highly effective for SMBs but acts as a blocker for Enterprise shortlists due to a lack of governance, risk assets, and panel listings.
            </Card>
            <Card title="The Productisation Opportunity" highlight>
              The fastest path to growth is productising repeatable work (Scorecard &rarr; Workshop &rarr; Sprint) rather than "adding services." SMBs buy products, not hours.
            </Card>
          </div>

          <div className="spacer reveal">
            <KeyInsight>
              <strong>Bottom line:</strong> Xperia's capability is real, but the public-facing proof doesn't match it &mdash; especially for enterprise. The fix isn't more services, it's better packaging and stronger credibility assets.
            </KeyInsight>
          </div>

          <div className="spacer reveal">
            <Accordion title="Read full executive detail">
              <div className="prose">
                <p>Xperia is positioned as a "people-first" improvement consultancy that combines change management, process improvement/continuous improvement, and customer experience. The public-facing offer currently reads as highly accessible to small businesses &mdash; templates, "DIY" language in testimonials, a scorecard/quiz lead magnet, and complimentary consults &mdash; while still signalling enterprise credibility via testimonials mentioning large organisations (nbn, EnergyAustralia) and a stated ability to work across both large enterprises and SMEs. In Australia, "small business" is commonly defined (ABS/ASBFEO) as fewer than 20 employees, with medium businesses at 20&ndash;199 and large at 200+. This matters because procurement expectations, perceived risk, governance, and proof requirements change sharply at those thresholds.</p>
                <p>The most direct "like-for-like" competitors are boutique change and improvement firms that sell Prosci/ADKAR-led delivery plus comms and training, often with national consultant pools and stronger explicit enterprise delivery proof. For enterprise buyers, "readiness signals" &mdash; panel listings, security certifications, delivery scale, governance/measurement approach &mdash; tend to carry as much weight as capability statements. The biggest positioning risk is that Xperia's public proof is currently strongest in testimonials and general claims, with limited visible case studies that quantify outcomes, scope, risk controls, and delivery governance. That's fine for SMB, but it is often a blocker for enterprise shortlists. The fastest path to improving enterprise positioning is not "adding services" &mdash; it is upgrading credibility assets and packaging: publish 3&ndash;5 enterprise-style case studies, make governance and measurement explicit, and align offers to how enterprise buys (discovery, benefits realisation, adoption metrics, vendor onboarding).</p>
              </div>
            </Accordion>
          </div>
        </section>

        {/* Market View */}
        <section id="market" className="section-block section-alt">
          <div className="reveal">
            <h2>Market Segmentation</h2>
            <p className="lead">How the Australian market defines buying behaviour &mdash; and what each segment expects.</p>
          </div>
          <div className="grid-3 reveal-children">
            <Card title="Small (SMB)">
              <div className="badge">&lt; 20 Employees</div>
              <p className="meta-row"><strong>Buyer:</strong> Owner / GM</p>
              <div className="divider" />
              <p><strong>Trigger:</strong> Immediate pain &mdash; staff frustration, inefficiency, messy growth.</p>
              <p><strong>Expectation:</strong> "Do it for me" or "Give me the template." Low friction, fast start.</p>
            </Card>
            <Card title="Mid-Market">
              <div className="badge">20&ndash;199 Employees</div>
              <p className="meta-row"><strong>Buyer:</strong> Ops Head / HR</p>
              <div className="divider" />
              <p><strong>Trigger:</strong> Growing pains, tech implementation adoption.</p>
              <p><strong>Expectation:</strong> Pragmatism + training plans. Needs some governance but speed still matters.</p>
            </Card>
            <Card title="Enterprise">
              <div className="badge dark">200+ Employees</div>
              <p className="meta-row"><strong>Buyer:</strong> Procurement / Panel</p>
              <div className="divider" />
              <p><strong>Trigger:</strong> Risk reduction, compliance, large transformation.</p>
              <p><strong>Expectation:</strong> ISO certifications, panel presence, risk controls, proven scale.</p>
            </Card>
          </div>
        </section>

        {/* Competitors */}
        <section id="competitors" className="section-block">
          <div className="reveal">
            <h2>Competitor Landscape</h2>
            <p className="lead">25 firms reviewed across 5 market categories. Click any row for deeper analysis.</p>
          </div>
          <div className="reveal">
            <div className="search-wrapper">
              <input type="text" className="search-input" placeholder="Search by name or category..."
                value={competitorSearch} onChange={(e) => setCompetitorSearch(e.target.value)} />
            </div>
            <CompetitorTable search={competitorSearch} />
          </div>
        </section>

        {/* Positioning Maps */}
        <section id="positioning" className="section-block section-alt">
          <div className="section-header-row reveal">
            <div>
              <h2>Market Position</h2>
              <p className="lead">Where Xperia sits relative to competitors &mdash; and where to go next.</p>
            </div>
            <SegmentToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>
          <div className="reveal">
            <PositioningMap {...mapData} />
          </div>
          {viewMode === 'enterprise' && (
            <div className="spacer-sm reveal">
              <KeyInsight>
                <strong>Strategic direction:</strong> The arrow shows Xperia's path &mdash; move UP the governance axis by building credibility assets (case studies, risk frameworks, panel listings), without losing boutique agility.
              </KeyInsight>
            </div>
          )}
          {viewMode === 'smb' && (
            <div className="spacer-sm reveal">
              <KeyInsight>
                <strong>Sweet spot:</strong> Xperia sits in a unique centre-left position &mdash; more productised than boutique consultants, but with deeper expertise than training-only providers. The "bundle" is a genuine differentiator here.
              </KeyInsight>
            </div>
          )}
        </section>

        {/* SMB vs Enterprise Comparison */}
        <section id="comparison" className="section-block">
          <div className="reveal">
            <h2>SMB vs Enterprise Comparison</h2>
          </div>
          <div className="grid-2 reveal-children">
            <Card title="SMB & Mid-Market" bgLight>
              <ul className="check-list">
                <li><strong>Positioning:</strong> "Done-for-you" templates + speed.</li>
                <li><strong>Xperia Fit:</strong> High. Scorecards and DIY language resonate perfectly.</li>
                <li><strong>Key Competitors:</strong> Lean training providers, local boutique coaches.</li>
                <li><strong>Pricing:</strong> Needs clear packaging (e.g., "Clarity Sprint"). Hourly rates cause friction.</li>
              </ul>
            </Card>
            <Card title="Enterprise" bgLight>
              <ul className="check-list">
                <li><strong>Positioning:</strong> Risk reduction, governance, capacity scale.</li>
                <li><strong>Xperia Fit:</strong> Medium/Low visibility. Capability exists, but "proof assets" are missing.</li>
                <li><strong>Key Competitors:</strong> The Big 4 (benchmarks), Changeworks, Customer Science.</li>
                <li><strong>Pricing:</strong> RFP / Panel rates / Retainers.</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* SWOT */}
        <section id="swot" className="section-block section-alt">
          <div className="section-header-row reveal">
            <h2>SWOT Analysis</h2>
            <SegmentToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>
          <div className="swot-grid reveal-children">
            <SwotCard type="s" title="Strengths" items={swot.strengths} />
            <SwotCard type="w" title="Weaknesses" items={swot.weaknesses} />
            <SwotCard type="o" title="Opportunities" items={swot.opportunities} />
            <SwotCard type="t" title="Threats" items={swot.threats} />
          </div>
        </section>

        {/* Recommendations */}
        <section id="recommendations" className="section-block">
          <div className="section-header-row reveal">
            <h2>Recommendations</h2>
            <SegmentToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>
          <p className="lead reveal">Prioritised actions &mdash; what to build next.</p>

          <div className="rec-group reveal">
            {recs.map((rec, i) => (
              <Accordion key={`${viewMode}-${i}`} title={`${rec.priority === 'high' ? 'HIGH' : 'MEDIUM'} PRIORITY: ${rec.title}`}>
                <p><strong>Why:</strong> {rec.why}</p>
                <p><strong>Action:</strong> {rec.action}</p>
                {rec.proof && <p><strong>Proof:</strong> {rec.proof}</p>}
              </Accordion>
            ))}
          </div>

          <div className="spacer reveal">
            <h3>Productised Offer Ideas</h3>
            <p className="lead">Ready-to-build packages that match {viewMode === 'smb' ? 'SMB' : 'enterprise'} buying behaviour.</p>
          </div>
          <div className="grid-3 reveal-children">
            {offers.map((offer, i) => <OfferCard key={`${viewMode}-${i}`} offer={offer} />)}
          </div>
        </section>

        {/* Messaging Toolkit */}
        <section id="messaging" className="section-block section-alt">
          <div className="reveal">
            <h2>Messaging Toolkit</h2>
            <p className="lead">Ready-to-use copy options grounded in Xperia's existing language and competitive positioning.</p>
          </div>

          <div className="reveal">
            <h3>Hero Copy Options</h3>
          </div>
          <div className="grid-3 reveal-children">
            {heroCopyOptions.map((opt, i) => (
              <div key={i} className="copy-card">
                <p className="copy-text">&ldquo;{opt.text}&rdquo;</p>
                <p className="copy-rationale">{opt.rationale}</p>
              </div>
            ))}
          </div>

          <div className="spacer reveal">
            <h3>LinkedIn Headline Options</h3>
            <div className="linkedin-options">
              {linkedInHeadlines.map((h, i) => (
                <div key={i} className="linkedin-card">
                  <span className="linkedin-num">{i + 1}</span>
                  <p>{h}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="spacer reveal">
            <h3>LinkedIn About Openers</h3>
          </div>
          <div className="grid-3 reveal-children">
            {linkedInOpeners.map((opt, i) => (
              <div key={i} className="copy-card">
                <p className="copy-text-sm">&ldquo;{opt.text}&rdquo;</p>
                <p className="copy-rationale">{opt.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Appendix */}
        <section id="appendix" className="section-block reveal">
          <Accordion title="Appendix & Sources">
            <div className="prose">
              <h4 style={{ marginBottom: '0.75rem' }}>Xperia</h4>
              <ul className="source-list">
                <li>Xperia homepage &mdash; service overview, testimonials, and positioning language</li>
                <li>Xperia change management service page &mdash; three-phase approach, ADKAR/Kotter references</li>
                <li>Xperia continuous improvement page &mdash; Lean/Six Sigma/Kaizen methods, process mapping, KPI tracking</li>
                <li>Xperia contact/FAQ page &mdash; pricing models (hourly/fixed), industry experience, SMB + enterprise claims</li>
                <li>Xperia customer experience page &mdash; "DIY" customer journey language, template-led support</li>
                <li>Xperia blog &mdash; "don't automate a broken process" narrative, change management for AI transformation</li>
              </ul>

              <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Government Procurement</h4>
              <ul className="source-list">
                <li>AusTender &mdash; procurement information system for publishing opportunities and contract notices</li>
                <li>Australian Government procurement guidance &mdash; panels/standing offers structure, refresh cycles</li>
              </ul>

              <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Market Definitions</h4>
              <ul className="source-list">
                <li>ABS (Australian Bureau of Statistics) &mdash; employment-size business definitions</li>
                <li>ASBFEO (Australian Small Business and Family Enterprise Ombudsman) &mdash; small business threshold definitions</li>
              </ul>

              <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Competitors &amp; Benchmarks (25 organisations reviewed)</h4>
              <ul className="source-list">
                <li><strong>Changeworks Consulting</strong> &mdash; changeworks.info; LinkedIn company page</li>
                <li><strong>Puzzle Partners</strong> &mdash; puzzlepartners.com.au/manage-change</li>
                <li><strong>The Futures Group</strong> &mdash; thefuturesgroup.com.au/change-management</li>
                <li><strong>Cathara Consulting</strong> &mdash; catharaconsulting.com/services/strategic-change-management</li>
                <li><strong>Enable Change Partners</strong> &mdash; enablechangepartners.com.au</li>
                <li><strong>Kaizen Institute Australia</strong> &mdash; kaizen.com/au</li>
                <li><strong>TXM Lean Solutions</strong> &mdash; txm.com/lean-solutions/continuous-improvement</li>
                <li><strong>Gagement</strong> &mdash; gagement.com.au</li>
                <li><strong>OE Partners</strong> &mdash; oepartners.com.au/continuous-improvement-consulting</li>
                <li><strong>CI Teams</strong> &mdash; citeams.com.au</li>
                <li><strong>Customer Science</strong> &mdash; customerscience.com.au/solution/cx-consulting</li>
                <li><strong>The Customer Experience Company</strong> &mdash; customerexperience.com.au</li>
                <li><strong>Symplicit</strong> &mdash; symplicit.com.au/about</li>
                <li><strong>Fifth Quadrant</strong> &mdash; fifthquadrant.com.au/services/customer-experience-research</li>
                <li><strong>Liquid CX</strong> &mdash; liquidcx.com.au</li>
                <li><strong>Datacom</strong> &mdash; datacom.com/au/en/solutions/experience/operational-advisory-and-experience-management/change-management</li>
                <li><strong>Insentra</strong> &mdash; insentragroup.com/au/services/professional-services/adoption-and-change-management</li>
                <li><strong>Telstra Purple</strong> &mdash; telstra.com.au/business-enterprise case study (Bridge Housing HCD)</li>
                <li><strong>Deloitte Australia</strong> &mdash; deloitte.com/au/en/services/consulting/services/organization-transformation</li>
                <li><strong>PwC Australia</strong> &mdash; pwc.com.au/workforce/change</li>
                <li><strong>KPMG Australia</strong> &mdash; kpmg.com/au/en/services/consulting/transform-enterprise/change-adoption</li>
                <li><strong>EY Australia</strong> &mdash; ey.com/en_au/services/workforce/change-management-experience</li>
                <li><strong>Accenture Australia</strong> &mdash; accenture.com/au-en</li>
                <li><strong>Capgemini Australia</strong> &mdash; capgemini.com/au-en/solutions/reinventing-work</li>
                <li><strong>IBM Consulting</strong> &mdash; ibm.com/consulting/culture-change-management</li>
              </ul>
            </div>
          </Accordion>
        </section>

        <footer className="footer">
          &copy; {new Date().getFullYear()} Xperia Competitor Analysis &middot; Prepared by Quietly Smart
        </footer>
      </main>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
