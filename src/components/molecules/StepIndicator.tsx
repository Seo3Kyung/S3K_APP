'use client';

import React from 'react';

interface StepIndicatorProps {
  current: number;
  total: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ current, total }) => {
  return (
    <div className="flex gap-3">
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = idx === current;

        if (!isActive) {
          return <div key={idx} className="w-3 h-3 rounded-full bg-neutral-300" />;
        }
        return (
          <div key={idx} className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full bg-brand-primary" />
            <div
              className="absolute inset-0 rounded-full blur-[1px] -m-[2px] bg-brand-primary/30"
              style={{
                width: 'calc(100% + 4px)',
                height: 'calc(100% + 4px)',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
