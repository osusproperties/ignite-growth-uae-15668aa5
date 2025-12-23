import React from "react";

interface PremiumIconProps {
  src: string;
  alt: string;
  size?: number; // container size in px
  imageSize?: number; // image size in px
  className?: string;
}

/**
 * PremiumIcon
 * Renders a real image icon in a premium glossy/metallic container.
 * Uses subtle glow, gradient, and drop-shadow to achieve a high-end finish.
 */
const PremiumIcon: React.FC<PremiumIconProps> = ({ src, alt, size = 56, imageSize = 28, className }) => {
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
  };

  const imgStyle: React.CSSProperties = {
    width: imageSize,
    height: imageSize,
  };

  return (
    <div
      className={[
        "rounded-lg",
        "bg-gradient-to-br",
        "from-gray-800/70",
        "to-gray-900/70",
        "ring-1",
        "ring-white/10",
        "shadow-[0_0_10px_rgba(255,215,0,0.25)]",
        "flex",
        "items-center",
        "justify-center",
        "transition-transform",
        "duration-300",
        "hover:scale-105",
        "hover:shadow-[0_0_16px_rgba(79,195,247,0.35)]",
        className || "",
      ].join(" ")}
      style={containerStyle}
      aria-hidden={alt ? undefined : true}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={imgStyle}
        className="object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] saturate-125 contrast-110"
      />
    </div>
  );
};

export default PremiumIcon;
