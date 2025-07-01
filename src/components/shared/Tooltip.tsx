import React, { type ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip = ({ children, content, side = 'top' }: TooltipProps) => {
  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  };

  return (
    <div className="group relative">
      {children}
      <div
        className={`absolute ${positions[side]} z-50 hidden whitespace-nowrap rounded-md bg-[#18294A] px-2 py-1.5 font-medium text-white text-xs group-hover:block`}
      >
        {content}
        <div
          className={`absolute ${
            side === 'top'
              ? '-translate-x-1/2 bottom-0 left-1/2 translate-y-1/2'
              : side === 'right'
                ? '-translate-y-1/2 -translate-x-1/2 top-1/2 left-0'
                : side === 'bottom'
                  ? '-translate-x-1/2 -translate-y-1/2 top-0 left-1/2'
                  : '-translate-y-1/2 top-1/2 right-0 translate-x-1/2'
          } h-2 w-2 rotate-45 transform bg-[#18294A]`}
        />
      </div>
    </div>
  );
};
