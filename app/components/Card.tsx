import React from 'react';

export const Card = ({ title, children, highlight = false, bgLight = false }: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
  bgLight?: boolean;
}) => (
  <div className={`card ${highlight ? 'card-highlight' : ''} ${bgLight ? 'card-light' : ''}`}>
    <h3>{title}</h3>
    <div className="card-body">{children}</div>
  </div>
);
