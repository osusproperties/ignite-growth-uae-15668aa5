import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface GoldIconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon;
  size?: number;
  className?: string;
  containerClassName?: string;
  withBackground?: boolean;
  withGlow?: boolean;
}

/**
 * Premium Glossy Gold Icon Component
 * Renders Lucide icons with a premium gold gradient finish
 */
const GoldIcon = ({
  icon: Icon,
  size = 24,
  className,
  containerClassName,
  withBackground = false,
  withGlow = false,
  ...props
}: GoldIconProps) => {
  return (
    <div
      className={cn(
        "icon-gold-container",
        withBackground && "icon-gold-bg rounded-lg p-3",
        withGlow && "icon-gold-glow",
        containerClassName
      )}
    >
      {/* SVG Gradient Definition - Hidden but provides gradient reference */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="25%" stopColor="#FFC125" />
            <stop offset="50%" stopColor="#DAA520" />
            <stop offset="75%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFEC8B" />
          </linearGradient>
        </defs>
      </svg>
      <Icon
        size={size}
        className={cn(className)}
        style={{
          stroke: "url(#gold-gradient)",
          filter: "drop-shadow(0 2px 4px rgba(218, 165, 32, 0.5)) drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))",
        }}
        {...props}
      />
    </div>
  );
};

export default GoldIcon;

// Export a simpler inline gold icon style for use in existing components
export const goldIconStyle = {
  stroke: "url(#gold-gradient)",
  filter: "drop-shadow(0 2px 4px rgba(218, 165, 32, 0.5)) drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))",
};

// Gold gradient SVG definition component - add once per page
export const GoldGradientDef = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="25%" stopColor="#FFC125" />
        <stop offset="50%" stopColor="#DAA520" />
        <stop offset="75%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFEC8B" />
      </linearGradient>
      <linearGradient id="gold-gradient-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFEC8B" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#DAA520" />
      </linearGradient>
    </defs>
  </svg>
);
