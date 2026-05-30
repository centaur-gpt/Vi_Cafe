import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 px-10 py-6 border-t border-slate-200 mt-12 mb-4 bg-white/40 backdrop-blur-md rounded-[32px] mx-4 sm:mx-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-sans font-bold text-slate-900 mb-1">Vi cafe</h2>
          <p className="text-xs opacity-80 text-slate-600 font-bold">Ваше любимое кафе-кулинария</p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold text-slate-600">
          <a href="#menu" className="hover:text-slate-900 transition">Меню</a>
          <a href="#info" className="hover:text-slate-900 transition">Информация</a>
          <a href="#contacts" className="hover:text-slate-900 transition">Контакты</a>
        </div>
        
        <div className="text-xs font-bold text-slate-400 text-center md:text-right uppercase tracking-widest">
          <p>Vi Cafe © {new Date().getFullYear()} • Professional Modern Culinary</p>
        </div>
      </div>
    </footer>
  );
}
