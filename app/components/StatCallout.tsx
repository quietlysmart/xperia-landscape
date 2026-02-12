import React from 'react';

export const StatCallout = ({ number, label }: { number: string; label: string }) => (
  <div className="stat-callout">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);
