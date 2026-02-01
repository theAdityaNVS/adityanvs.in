import React from 'react';
import ImageWithFallback from './ImageWithFallback';

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




