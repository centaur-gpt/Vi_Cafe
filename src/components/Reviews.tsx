import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Екатерина С.",
    text: "Очень уютное место! Паста просто бесподобная, как в Италии. Рекомендуем для семейных обедов.",
    rating: 5,
    date: "Неделю назад"
  },
  {
    name: "Михаил В.",
    text: "Отличные бизнес-ланчи. Всегда свежее и вкусное, порции большие. Удобно, что есть большая парковка.",
    rating: 5,
    date: "3 недели назад"
  },
  {
    name: "Анна К.",
    text: "Заказываем детям пиццу уже не первый раз. Детское меню шикарное, есть игровой уголок.",
    rating: 4,
    date: "Месяц назад"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative z-10 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 mb-4">Отзывы наших гостей</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl font-bold text-slate-900">3.9</span>
            <div className="flex text-amber-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 text-gray-300 fill-current" />
            </div>
          </div>
          <p className="text-slate-600 font-bold text-sm">На основе 14 оценок</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/40 backdrop-blur-md p-8 rounded-[32px] border border-white/50 hover:bg-white/60 transition">
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300 fill-current'}`} />
                ))}
              </div>
              <p className="text-slate-800 font-medium mb-6 italic">"{review.text}"</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-900">{review.name}</span>
                <span className="text-slate-500 font-bold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
