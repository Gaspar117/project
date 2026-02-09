import { useEffect, useRef } from 'react';

export function EndpAdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adContainerRef.current) return;

    const atOptions = {
      'key': '441667846821e84213ba015a8de24574',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    window.atOptions = atOptions;

    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/441667846821e84213ba015a8de24574/invoke.js';
    script.async = true;

    adContainerRef.current.appendChild(script);

    return () => {
      if (adContainerRef.current && script.parentNode === adContainerRef.current) {
        adContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div ref={adContainerRef} />
    </div>
  );
}
