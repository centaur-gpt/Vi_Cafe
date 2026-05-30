import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 bg-transparent min-h-[90vh] flex items-center">
      <div className="absolute inset-0 p-4">
        <img
          className="w-full h-full object-cover rounded-[40px] opacity-20"
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Интерьер Vi cafe"
        />
        <div className="absolute inset-0 bg-white/40 mix-blend-overlay rounded-[40px]" aria-hidden="true" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-8 py-16 sm:px-12 w-full text-center bg-white/40 backdrop-blur-xl border border-white/50 rounded-[32px] overflow-hidden group">
        <h1 className="text-5xl md:text-7xl font-sans font-bold text-slate-900 mb-6 tracking-tight">
          Vi cafe
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium mb-10">
          Уютное кафе-кулинария с настоящей итальянской пастой, сытными русскими завтраками и теплой атмосферой.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition">
            Посмотреть меню
          </a>
          <a href="#contacts" className="bg-white/60 backdrop-blur-sm text-slate-900 border border-white/80 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/80 transition">
            Забронировать столик
          </a>
        </div>
      </div>
    </div>
  );
}
