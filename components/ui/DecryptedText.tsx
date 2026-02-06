import React, { useState, useEffect, useRef, useCallback } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  animateOnView?: boolean;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const DecryptedText: React.FC<DecryptedTextProps & { useGlitch?: boolean }> = ({ text, className = '', animateOnView = true, useGlitch = false }) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const startScramble = useCallback(() => {
    if (!useGlitch) return; // Only scramble if explicitly enabled

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text, useGlitch]);

  useEffect(() => {
    if (!animateOnView || !useGlitch) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startScramble();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [animateOnView, useGlitch, startScramble]);

  return (
    <span
      ref={elementRef}
      className={`${className} inline-block ${useGlitch ? 'cursor-default' : ''}`}
      onMouseEnter={() => useGlitch && startScramble()}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;