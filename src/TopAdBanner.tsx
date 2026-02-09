import AdsterraBanner from "./AdsterraBanner.tsx";

export function TopAdBanner() {
  return (
    <div className="flex justify-center w-full overflow-hidden">
       {/* Você pode usar a lógica de isMobile aqui se quiser trocar a key */}
       <AdsterraBanner 
         adKey="b05cf5b7f75e737c3e4f0502dc9492dc" 
         width={728} 
         height={90} 
       />
    </div>
  );
}