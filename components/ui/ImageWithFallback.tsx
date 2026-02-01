import React, { useState } from 'react';
import DefaultCompanyLogo from './DefaultCompanyLogo';

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

export default ImageWithFallback;
