import React from 'react';
import { cn } from '../lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl",
        hover && "hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}