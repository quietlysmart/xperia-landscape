import React from 'react';

export const KeyInsight = ({ children }: { children: React.ReactNode }) => (
  <div className="key-insight">
    <span className="key-insight-marker">Key Insight</span>
    <div className="key-insight-body">{children}</div>
  </div>
);
