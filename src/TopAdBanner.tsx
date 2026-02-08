import { useEffect, useRef } from 'react';

export function TopAdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adContainerRef.current) return;

    const atOptions = {
      'key': 'b05cf5b7f75e737c3e4f0502dc9492dc',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    window.atOptions = atOptions;

    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/b05cf5b7f75e737c3e4f0502dc9492dc/invoke.js';
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
