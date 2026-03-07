import { getContrastTextColor } from '@neobrut/core';
import { useMemo } from 'react';

interface NeoBadgeProps {
  label: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'white' | string;
}

const presetColors: Record<string, string> = {
  primary: 'bg-neo-primary text-neo-white',
  secondary: 'bg-neo-secondary text-neo-black',
  danger: 'bg-neo-danger text-neo-white',
  success: 'bg-neo-success text-neo-white',
  white: 'bg-neo-white text-neo-black',
};

export function NeoBadge({ label, color = 'primary' }: NeoBadgeProps) {
  const isCustomColor = !(color in presetColors);

  const badgeClasses = useMemo(() => {
    return [
      'inline-block px-3 py-1 text-sm font-bold border-4 border-black shadow-neo-sm',
      !isCustomColor && presetColors[color],
    ]
      .filter(Boolean)
      .join(' ');
  }, [isCustomColor, color]);

  const customStyles = useMemo(() => {
    if (!isCustomColor) {
      return {};
    }
    return {
      backgroundColor: color,
      color: getContrastTextColor(color),
    };
  }, [isCustomColor, color]);

  return (
    <span
      className={badgeClasses}
      style={customStyles}
    >
      {label}
    </span>
  );
}
