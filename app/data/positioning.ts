export type MapDot = {
  name: string;
  x: number; // 0-100, left to right
  y: number; // 0-100, bottom to top
  isXperia?: boolean;
};

// SMB Map: X = Productised → Bespoke, Y = Ops-first → Change-first
export const smbMap: {
  title: string;
  xAxis: [string, string];
  yAxis: [string, string];
  dots: MapDot[];
} = {
  title: 'SMB & Mid-Market Positioning',
  xAxis: ['Productised tools & templates', 'Bespoke consulting'],
  yAxis: ['Ops / process-first', 'Change / adoption-first'],
  dots: [
    { name: 'Xperia', x: 35, y: 45, isXperia: true },
    { name: 'Insentra', x: 25, y: 75 },
    { name: 'Changeworks', x: 75, y: 80 },
    { name: 'The Futures Group', x: 70, y: 85 },
    { name: 'Puzzle Partners', x: 65, y: 70 },
    { name: 'CI Teams', x: 20, y: 20 },
    { name: 'TXM', x: 70, y: 15 },
    { name: 'Kaizen Institute', x: 65, y: 25 },
    { name: 'OE Partners', x: 60, y: 20 },
    { name: 'Liquid CX', x: 40, y: 55 },
    { name: 'Gagement', x: 50, y: 30 },
    { name: 'Enable Change', x: 45, y: 70 },
  ],
};

// Enterprise Map: X = Boutique → Scale, Y = Governance light → Governance heavy
export const enterpriseMap: {
  title: string;
  xAxis: [string, string];
  yAxis: [string, string];
  dots: MapDot[];
  arrow?: { from: { x: number; y: number }; to: { x: number; y: number } };
} = {
  title: 'Enterprise Positioning',
  xAxis: ['Boutique specialist', 'Large-firm scale'],
  yAxis: ['Proof & governance light', 'Proof & governance heavy'],
  dots: [
    { name: 'Xperia', x: 20, y: 30, isXperia: true },
    { name: 'Deloitte', x: 90, y: 90 },
    { name: 'PwC', x: 85, y: 88 },
    { name: 'KPMG', x: 88, y: 85 },
    { name: 'EY', x: 82, y: 87 },
    { name: 'Accenture', x: 92, y: 82 },
    { name: 'Customer Science', x: 30, y: 80 },
    { name: 'Changeworks', x: 40, y: 65 },
    { name: 'Symplicit', x: 35, y: 60 },
    { name: 'Datacom', x: 70, y: 55 },
    { name: 'Telstra Purple', x: 75, y: 60 },
    { name: 'The CX Co.', x: 35, y: 70 },
  ],
  // Arrow showing Xperia's strategic direction: move UP on governance
  arrow: { from: { x: 20, y: 30 }, to: { x: 25, y: 65 } },
};
