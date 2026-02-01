import React, { useState } from 'react';

// Helper image component with graceful fallback to DefaultCompanyLogo
const ImageWithFallback: React.FC<{ src: string; alt: string; name?: string }> = ({ src, alt, name }) => {
  const [errored, setErrored] = useState(false);
  if (errored) return <DefaultCompanyLogo name={name || alt} />;
  return (
    <img
      src={encodeURI(src)}
      alt={alt}
      className="w-full h-full object-contain"
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
};

export const ChaseLogo = () => (
  <div className="w-full h-full p-1">
    <ImageWithFallback src="/Logos/jpm_chase.webp" alt="JPMorgan Chase" name="JPM" />
  </div>
);

export const JPMorganLogo = ChaseLogo; // alias

export const TCSLogo = () => (
  <div className="w-full h-full p-1">
    <ImageWithFallback src="/Logos/tcs.webp" alt="TCS" name="TCS" />
  </div>
);

export const HackerEarthLogo = () => (
  <div className="w-full h-full p-1">
    <ImageWithFallback src="/Logos/hackerearth.webp" alt="HackerEarth" name="HE" />
  </div>
);

export const LingoJrLogo = () => (
  <div className="w-full h-full p-1">
    <ImageWithFallback src="/Logos/lingo_jr.webp" alt="Lingo Jr" name="LJ" />
  </div>
);

export const DefaultCompanyLogo = ({ name }: { name: string }) => (
  <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white font-bold text-xs rounded-md">
    {name.substring(0, 2).toUpperCase()}
  </div>
);


