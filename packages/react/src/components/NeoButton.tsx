import { type ButtonHTMLAttributes, type ReactNode, useMemo } from 'react';

interface NeoButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: ReactNode;
  primaryColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  rotate?: boolean;
}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-lg',
  lg: 'px-8 py-4 text-xl',
};

export function NeoButton({
  children,
  primaryColor = '#4C7BF4',
  textColor,
  size = 'md',
  disabled = false,
  rotate = false,
  className = '',
  type = 'button',
  ...props
}: NeoButtonProps) {
  const computedTextColor = useMemo(() => {
    if (textColor) return textColor;

    if (primaryColor === '#FFFFFF' || primaryColor.toLowerCase() === '#fff') {
      return '#000';
    }

    try {
      const hex = primaryColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness < 128 ? '#fff' : '#000';
    } catch {
      return '#000';
    }
  }, [primaryColor, textColor]);

  const buttonClasses = useMemo(() => {
    return [
      'border-4 border-black font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
      sizeClasses[size],
      !disabled && 'hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all',
      rotate && 'rotate-1',
      disabled && 'opacity-50 cursor-not-allowed',
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [size, disabled, rotate, className]);

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      style={{
        backgroundColor: primaryColor,
        color: computedTextColor,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
