import React from 'react';
import { MapPin, Train } from 'lucide-react';

export default function Location() {
  return (
    <section id="contacts" className="py-20 relative z-10 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 border border-white/50 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 mb-2">Как нас найти</h2>
            <p className="text-slate-600 text-lg mb-4 leading-relaxed font-medium">
              Мы находимся в удобном месте с отличной транспортной доступностью. 
              Рядом есть большая бесплатная парковка на 240 мест.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Train className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Метро Нагорная</h4>
                  <p className="text-slate-600 font-medium">6 минут пешком (600 м)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Train className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Метро Нахимовский проспект</h4>
                  <p className="text-slate-600 font-medium">10 минут пешком (900 м)</p>
                  <p className="text-sm text-slate-500 font-bold mt-1">Рядом 30 парковок</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition shadow-md hover:shadow-lg w-full">
                Проложить маршрут
              </button>
            </div>
          </div>
          
          <div className="h-[400px] lg:h-[500px] w-full bg-slate-100 rounded-[32px] overflow-hidden relative shadow-lg border border-white/50 backdrop-blur-md">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}>
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl text-center max-w-[200px] border border-white/50">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="text-slate-900 w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 leading-tight">Vi cafe</h3>
                  <p className="text-xs text-slate-600 font-bold mt-1">Ждём вас в гости!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
