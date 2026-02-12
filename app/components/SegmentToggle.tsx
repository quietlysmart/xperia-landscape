import React from 'react';

type ViewMode = 'smb' | 'enterprise';

export const SegmentToggle = ({ viewMode, setViewMode }: {
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
}) => (
  <div className="inline-toggle">
    <button
      className={`toggle-pill ${viewMode === 'smb' ? 'active' : ''}`}
      onClick={() => setViewMode('smb')}
    >
      SMB / Mid-Market
    </button>
    <button
      className={`toggle-pill ${viewMode === 'enterprise' ? 'active' : ''}`}
      onClick={() => setViewMode('enterprise')}
    >
      Enterprise
    </button>
  </div>
);
