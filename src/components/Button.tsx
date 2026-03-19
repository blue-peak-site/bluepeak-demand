import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  to?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: boolean;
}

export default function Button({ to, onClick, children, variant = 'primary', size = 'md', className = '', icon = false }: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3.5 rounded-xl",
    lg: "px-10 py-5 text-lg rounded-2xl"
  };

  const baseStyles = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${sizes[size]}`;
  
  const variants = {
    primary: "bg-bp-cta text-white shadow-[0_0_20px_rgba(30,167,255,0.3)] hover:shadow-[0_0_30px_rgba(30,167,255,0.5)] hover:bg-bp-cta/90",
    secondary: "bg-bp-bg-secondary text-bp-white border border-white/10 hover:border-bp-cta/50 hover:bg-bp-bg-secondary/80",
    outline: "bg-transparent text-bp-white border border-bp-cta/30 hover:border-bp-cta hover:bg-bp-cta/10"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
