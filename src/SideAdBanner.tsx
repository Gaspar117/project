import { useEffect, useRef } from 'react';

export function SideAdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adContainerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://pl28677954.effectivegatecpm.com/9dd76a137a011c9e4bc9415eb142407d/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    const container = document.createElement('div');
    container.id = 'container-9dd76a137a011c9e4bc9415eb142407d';

    adContainerRef.current.appendChild(container);
    adContainerRef.current.appendChild(script);

    return () => {
      if (adContainerRef.current) {
        if (container.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(container);
        }
        if (script.parentNode === adContainerRef.current) {
          adContainerRef.current.removeChild(script);
        }
      }
    };
  }, []);

  return <div ref={adContainerRef} />;
}
