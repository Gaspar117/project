import { useEffect, useRef } from 'react';

export function EndAdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Segurança para garantir que o elemento existe
    if (!adContainerRef.current) return;

    // Limpa o container para evitar duplicação em re-renderizações (React Strict Mode)
    adContainerRef.current.innerHTML = '';

    // Configuração específica deste anúncio
    const atOptions = {
      'key': '441667846821e84213ba015a8de24574',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    // Atribui ao window
    window.atOptions = atOptions;

    // Cria o elemento de script
    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/441667846821e84213ba015a8de24574/invoke.js';
    script.async = true; 
    script.type = 'text/javascript';

    // Insere o script dentro da div referenciada
    adContainerRef.current.appendChild(script);

    // Função de limpeza
    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    // Classes para centralizar e dar margem vertical
    <div className="flex w-full justify-center items-center my-4">
      {/* O container tem tamanho fixo para evitar CLS (Cumulative Layout Shift) */}
      <div 
        ref={adContainerRef} 
        style={{ width: '300px', height: '250px' }} 
        className="bg-gray-100" // Cor de fundo opcional enquanto carrega
      />
    </div>
  );
}