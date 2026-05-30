import React from 'react';

const menuCategories = [
  {
    title: "Основные блюда",
    items: [
      "Паста", "Пельмени", "Вареники", "Супы", "Салаты", "Шаурма", "Буррито", "Картофель-фри"
    ]
  },
  {
    title: "Фирменная выпечка",
    items: [
      "Пицца", "Пироги", "Блины", "Пирожки", "Беляши", "Хачапури"
    ]
  },
  {
    title: "Напитки с собой",
    items: [
      "Свежесваренный кофе", "Чай", "Фруктовые смузи"
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 relative z-10 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 mb-6">Наше Меню</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            От сытных домашних обедов до любимого фастфуда — мы готовим с душой. 
            Попробуйте наши блюда русской и итальянской кухни.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md p-8 rounded-[32px] border border-white/50 hover:bg-white/60 transition">
              <h3 className="text-2xl font-sans font-bold mb-6 text-slate-900">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-slate-700 font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm font-bold mb-6">Действует заказ навынос. Уточняйте полный ассортимент в кафе.</p>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition shadow-md">
              Сделать заказ на вынос
            </button>
        </div>
      </div>
    </section>
  );
}
