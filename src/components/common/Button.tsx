import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  disabled = false,
  loading = false,
  icon,
  ...props
}) => {
  const baseClasses = 'flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-colors duration-200';
  
  const variants = {
    primary: 'bg-[#39FF14] text-black font-bold hover:shadow-neon',
    secondary: 'border border-[#39FF14]/30 text-[#39FF14] bg-transparent hover:bg-[#39FF14]/10',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      className={`${baseClasses} ${variants[variant]} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      {!loading && icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};
