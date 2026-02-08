import { useState, useEffect } from 'react';
import { Lock, Unlock, Clock } from 'lucide-react';
import { TopAdBanner } from './TopAdBanner';
import { SideAdBanner } from './SideAdBanner';

function App() {
  const [timeLeft, setTimeLeft] = useState(20);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsUnlocked(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 p-3 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div>
            <TopAdBanner/>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl p-6 shadow-xl sticky top-8">
              <p className="text-white font-bold text-center mb-3">ANÚNCIO</p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 mb-3">
                <SideAdBanner />
              </div>
              
            </div>
          </aside>

          <main className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                <h1 className="text-3xl font-bold text-white text-center">
                  Conteúdo Protegido
                </h1>
              </div>

              <div className="p-8">
                {!isUnlocked ? (
                  <div className="text-center space-y-8">
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-full shadow-xl animate-pulse">
                        <Lock className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Aguarde para acessar o conteúdo
                      </h2>
                      <p className="text-gray-600">
                        O conteúdo será liberado em alguns segundos...
                      </p>
                    </div>

                    <div className="relative">
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                          <Clock className="w-12 h-12 text-white mx-auto mb-2" />
                          <div className="text-6xl font-bold text-white">
                            {timeLeft}
                          </div>
                          <div className="text-white text-sm mt-2">segundos</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-yellow-800 text-sm">
                        ⏳ Por favor, aguarde o tempo restante para acessar o conteúdo exclusivo
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6 animate-fade-in">
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-full shadow-xl">
                        <Unlock className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        🎉 Conteúdo Liberado!
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Agora você tem acesso ao conteúdo exclusivo
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Conteúdo Exclusivo Desbloqueado
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Parabéns! Você aguardou o tempo necessário e agora tem acesso
                        ao nosso conteúdo premium. Este espaço pode conter:
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Links para download de arquivos exclusivos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Acesso a vídeos e tutoriais premium</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Material educativo de alta qualidade</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>Conteúdo digital e recursos exclusivos</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <button onclick="window.location.href='https://www.effectivegatecpm.com/tfzczk9x?key=74f0472b7b21a2ebaffbfd90a383a344';" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                          Acessar Conteúdo Agora
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>

          <aside className="lg:col-span-3">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-6 shadow-xl sticky top-8">
              <p className="text-white font-bold text-center mb-3">ANÚNCIO</p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 mb-3">
                <SideAdBanner />
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 p-3 shadow-lg mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <p className="text-white font-semibold text-sm">
              <TopAdBanner/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
