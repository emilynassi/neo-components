import { type ReactNode } from 'react';

interface NeoHeadingProps {
  children: ReactNode;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const sizeClasses: Record<string, string> = {
  xl: 'text-5xl',
  lg: 'text-4xl',
  md: 'text-2xl',
  sm: 'text-xl',
};

export function NeoHeading({ children, size = 'lg', as = 'h2', className = '' }: NeoHeadingProps) {
    const Component = as;
  return <Component className={`text-${size} font-bold ${className}`}>{children}</Component>;
}