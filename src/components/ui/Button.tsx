import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', href, className = '', ...props }, ref) => {
    
    const baseClasses = "group relative inline-flex items-center justify-center overflow-hidden font-medium transition-all duration-300 rounded-sm";
    
    // Primary: Brand color with subtle hover movement
    const primaryClasses = "bg-[var(--color-blueberry-primary)] text-white hover:bg-[var(--color-blueberry-secondary)] px-8 py-4 text-sm tracking-wide";
    
    // Secondary: Outline / text button
    const secondaryClasses = "border border-[var(--color-blueberry-primary)] text-[var(--color-blueberry-primary)] hover:bg-[var(--color-blueberry-primary)] hover:text-white px-8 py-4 text-sm tracking-wide bg-transparent";

    const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;
    
    const content = (
      <>
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <motion.span
            className="inline-block"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </span>
      </>
    );

    if (href) {
      if (href.startsWith('http')) {
        return (
          <motion.a 
            href={href} 
            className={`${baseClasses} ${variantClasses} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {content}
          </motion.a>
        );
      }
      return (
        <Link to={href} className="inline-block">
          <motion.button 
            className={`${baseClasses} ${variantClasses} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
             {content}
          </motion.button>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
