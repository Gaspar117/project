import { useEffect, useRef } from 'react';

type AdBannerProps = {
  adKey: string;
  width: number;
  height: number;
};

export default function AdsterraBanner({ adKey, width, height }: AdBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    const currentRef = bannerRef.current;
    
    // Limpa o container para evitar duplicatas
    currentRef.innerHTML = '';

    // Cria um iframe programaticamente
    const iframe = document.createElement('iframe');
    iframe.width = `${width}`;
    iframe.height = `${height}`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no'; // Remove barras de rolagem
    
    // Adiciona o iframe ao container
    currentRef.appendChild(iframe);

    // O segredo: Escrevemos o HTML DENTRO do iframe.
    // Assim, o 'window.atOptions' fica preso dentro do iframe e não vaza para o site.
    const doc = iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;overflow:hidden;">
            <script type="text/javascript">
              atOptions = {
                'key' : '${adKey}',
                'format' : 'iframe',
                'height' : ${height},
                'width' : ${width},
                'params' : {}
              };
            </script>
            <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
          </body>
        </html>
      `);
      doc.close();
    }

    return () => {
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, [adKey, width, height]);

  return (
    <div 
      ref={bannerRef} 
      className="flex justify-center items-center my-2"
      style={{ width: width, height: height }}
    />
  );
}