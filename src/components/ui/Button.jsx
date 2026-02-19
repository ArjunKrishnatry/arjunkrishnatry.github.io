/**
 * Button Component
 * Reusable button with primary and secondary variants
 */
export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light hover:shadow-glow',
    secondary: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'text-gray-400 hover:text-primary hover:bg-surface',
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
