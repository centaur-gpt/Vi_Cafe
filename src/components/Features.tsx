import React from 'react';
import { ChefHat, Coffee, Sun, Baby } from 'lucide-react';

const features = [
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: "Русская и Итальянская кухня",
    description: "Разнообразное меню от традиционных борщей до настоящей итальянской пасты и пиццы."
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Завтраки и Ланчи",
    description: "Начните день с вкусного завтрака (10:00-14:00) или приходите на сытный бизнес-ланч (12:00-16:00)."
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Летняя веранда",
    description: "Наслаждайтесь любимыми блюдами на свежем воздухе. Уютные столики на улице ждут вас."
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: "Для детей",
    description: "Для наших маленьких гостей мы подготовили специальное детское меню и обустроили игровой уголок."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative z-10 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-white/40 backdrop-blur-md rounded-[32px] border border-white/50 hover:bg-white/60 transition duration-300">
              <div className="w-14 h-14 bg-white/60 border border-white/80 rounded-full flex items-center justify-center text-slate-800 mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
