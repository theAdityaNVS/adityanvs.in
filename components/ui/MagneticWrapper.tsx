import React, { useRef, useState } from 'react';

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // How strong the magnet is (pixels)
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ children, className = '', strength = 30 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Use the provided strength prop to scale the movement; clamp to prevent extreme movement
    const scale = Math.min(Math.max(strength / 60, 0.1), 1);
    setPosition({ x: x * scale, y: y * scale });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
};

export default MagneticWrapper;