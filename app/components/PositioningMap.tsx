import React from 'react';
import type { MapDot } from '../data/positioning';

type Props = {
  title: string;
  xAxis: [string, string];
  yAxis: [string, string];
  dots: MapDot[];
  arrow?: { from: { x: number; y: number }; to: { x: number; y: number } };
};

export const PositioningMap = ({ title, xAxis, yAxis, dots, arrow }: Props) => (
  <div className="positioning-map">
    <div className="map-wrapper">
      <div className="y-label y-label-top">{yAxis[1]}</div>
      <div className="y-label y-label-bottom">{yAxis[0]}</div>
      <div className="x-labels x-labels-top">
        <span>{xAxis[0]}</span>
        <span>{xAxis[1]}</span>
      </div>
      <div className="map-area">
        {/* Quadrant labels */}
        <div className="quadrant-label q-tl">Change + Productised</div>
        <div className="quadrant-label q-tr">Change + Bespoke</div>
        <div className="quadrant-label q-bl">Ops + Productised</div>
        <div className="quadrant-label q-br">Ops + Bespoke</div>

        {/* Crosshair lines */}
        <div className="map-crosshair-h" />
        <div className="map-crosshair-v" />

        {/* Strategy arrow */}
        {arrow && (
          <svg className="map-arrow" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="var(--primary)" />
              </marker>
            </defs>
            <line
              x1={arrow.from.x} y1={100 - arrow.from.y}
              x2={arrow.to.x} y2={100 - arrow.to.y}
              stroke="var(--primary)" strokeWidth="0.8"
              strokeDasharray="2,2" markerEnd="url(#arrowhead)"
            />
          </svg>
        )}

        {/* Dots */}
        {dots.map(dot => (
          <div
            key={dot.name}
            className={`map-dot ${dot.isXperia ? 'map-dot-xperia' : ''}`}
            style={{ left: `${dot.x}%`, bottom: `${dot.y}%` }}
          >
            <span className="dot-marker" />
            <span className="dot-label">{dot.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
