interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClass = {
  sm: "odoo-spinner-sm",
  md: "odoo-spinner",
  lg: "odoo-spinner-lg",
} as const;

export function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div
      className={`${sizeClass[size]} ${className}`}
      role="presentation"
      aria-hidden
    />
  );
}
