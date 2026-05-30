import React from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { name: 'Меню', href: '#menu' },
  { name: 'Инфо', href: '#info' },
  { name: 'Отзывы', href: '#reviews' },
  { name: 'Фото', href: '#photos' },
  { name: 'Вопросы', href: '#questions' },
  { name: 'Контакты', href: '#contacts' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Vi cafe</a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-slate-900 font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex">
             <a href="#contacts" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition">
               Заказ столиков
             </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-slate-800"
            >
              {isOpen ? <X className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-medium text-slate-900 hover:bg-white/80"
              >
                {link.name}
              </a>
            ))}
             <div className="px-3 mt-4">
               <a href="#contacts" onClick={() => setIsOpen(false)} className="block text-center w-full bg-slate-900 text-white px-6 py-3 rounded-xl font-medium">
                 Заказ столиков
               </a>
             </div>
          </div>
        </div>
      )}
    </header>
  );
}
