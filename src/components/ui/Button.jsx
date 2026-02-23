/**
 * Button Component
 * Reusable button with primary and secondary variants
 * Features bioluminescent glow effects
 */
export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-500 inline-flex items-center gap-2 relative';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-bio-cyan/30 hover:shadow-glow-xl btn-glow-pulse',
    secondary: 'border border-primary text-primary hover:bg-primary/10 hover:shadow-bio-cyan/50 hover:border-primary-light',
    ghost: 'text-gray-400 hover:text-primary hover:bg-surface hover:shadow-bio-cyan/20',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
