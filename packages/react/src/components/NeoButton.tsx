import { type ButtonHTMLAttributes, type ReactNode, useMemo } from 'react';
import { getContrastTextColor } from '@neobrut/core';

interface NeoButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'white' | string;
  size?: 'sm' | 'md' | 'lg';
  rotate?: boolean;
}

const presetColors: Record<string, string> = {
  primary: 'bg-neo-primary text-neo-white',
  secondary: 'bg-neo-secondary text-neo-black',
  danger: 'bg-neo-danger text-neo-white',
  success: 'bg-neo-success text-neo-white',
  white: 'bg-neo-white text-neo-black',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm shadow-neo-sm',
  md: 'px-6 py-3 text-lg shadow-neo',
  lg: 'px-8 py-4 text-xl shadow-neo',
};

export function NeoButton({
  children,
  color = 'primary',
  size = 'md',
  disabled = false,
  rotate = false,
  className = '',
  type = 'button',
  ...props
}: NeoButtonProps) {
  const isCustomColor = !(color in presetColors);

  const buttonClasses = useMemo(() => {
    return [
      'border-4 border-black font-bold',
      sizeClasses[size],
      !isCustomColor && presetColors[color],
      !disabled && 'hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all',
      rotate && 'rotate-1',
      disabled && 'opacity-50 cursor-not-allowed',
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [size, disabled, rotate, className, isCustomColor, color]);

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
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      style={customStyles}
      {...props}
    >
      {children}
    </button>
  );
}
