import Image from "next/image";

const VIRTUOCODE_URL = "https://virtuocode.ai/";

interface BrandLogoProps {
  className?: string;
  /** White logo for dark/purple navbar backgrounds */
  light?: boolean;
}

export function BrandLogo({
  className = "h-7 w-auto",
  light = true,
}: BrandLogoProps) {
  return (
    <a
      href={VIRTUOCODE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 hover:opacity-80 transition-opacity"
      aria-label="Virtuocode"
    >
      <Image
        src="/brand/logo.webp"
        alt="Virtuocode"
        width={140}
        height={36}
        className={`${className}${light ? " brand-logo-light" : ""}`}
        priority
      />
    </a>
  );
}
