import React from 'react';
import type { ProductisedOffer } from '../data/recommendations';

export const OfferCard: React.FC<{ offer: ProductisedOffer }> = ({ offer }) => (
  <div className="offer-card">
    <div className="offer-header">
      <h4 className="offer-name">{offer.name}</h4>
      <span className="offer-timeline">{offer.timeline}</span>
    </div>
    <div className="offer-body">
      <div className="offer-section">
        <span className="offer-label">Deliverables</span>
        <p>{offer.deliverables}</p>
      </div>
      <div className="offer-section">
        <span className="offer-label">Why this works</span>
        <p className="offer-rationale">{offer.rationale}</p>
      </div>
    </div>
  </div>
);
