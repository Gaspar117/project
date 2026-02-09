import { useEffect, useRef } from 'react';

// Adicione isso se estiver usando TypeScript estrito para evitar erros no window
declare global {
  interface Window {
    atOptions: any;
  }
}

export function TopAdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Limpa o container antes de inserir o script (segurança para React.StrictMode)
    adContainerRef.current.innerHTML = '';

    // Verifica a largura da tela
    const isMobile = window.innerWidth < 768;

    // CONFIGURAÇÃO: Coloque aqui sua chave Mobile vs Desktop
    const adConfig = isMobile 
      ? {
          // --- MOBILE (Ex: 300x250 ou 320x50) ---
          // Você precisa gerar essa chave no seu painel de anúncios
          'key': 'a7189f063339abb3ac5dfb5807a32d1b', 
          'format': 'iframe',
          'height': 50, 
          'width': 300,
          'params': {}
        }
      : {
          // --- DESKTOP (728x90) ---
          'key': 'a7189f063339abb3ac5dfb5807a32d1b',
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        };

    // Define as opções globais
    window.atOptions = adConfig;

    // Cria o script
    const script = document.createElement('script');
    script.src = `https://www.highperformanceformat.com/${adConfig.key}/invoke.js`;
    script.async = true; // Use async true para não bloquear a renderização

    adContainerRef.current.appendChild(script);

    return () => {
      // Limpeza ao desmontar
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = '';
      }
      // Opcional: Limpar o atOptions global
      window.atOptions = null;
    };
  }, []); // Executa apenas uma vez ao montar

  return (
    // Classes Tailwind para centralizar e garantir espaçamento
    <div className="flex w-full justify-center items-center my-4 overflow-hidden">
      <div ref={adContainerRef} />
    </div>
  );
}