import AdsterraBanner from './AdsterraBanner'; // Ajuste o caminho

export function MeioAd() {
  return (
    <div className="hidden md:flex justify-center"> {/* Exibe só em telas maiores */}
       <AdsterraBanner 
         adKey="7e477e25caa4bd509ca8bf572a6ae750" 
         width={250} 
         height={300} 
       />
    </div>
  );
}