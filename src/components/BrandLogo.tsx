interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

export default function BrandLogo({
  className = "",
  size = "md",
  color = "text-[#a30b45]",
}: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-baseline -tracking-wider ${color} ${sizes[size]} ${className}`}
      style={{ fontFamily: "var(--font-brand)", letterSpacing: "-1px" }}
    >
      <span className="font-bold italic">glam</span>
      <span className="font-normal">here</span>
    </span>
  );
}
