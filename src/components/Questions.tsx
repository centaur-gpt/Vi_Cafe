import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Можно ли с собакой?",
    answer: "К сожалению, в основной зал мы не пускаем с животными, но вы всегда можете разместиться на нашей летней веранде со своим питомцем."
  },
  {
    question: "Нужно ли бронировать столик заранее?",
    answer: "В будние дни днём места обычно есть, но на вечер или выходные лучше бронировать столик заранее, так как у нас всего 15 уютных мест."
  },
  {
    question: "Проводите ли вы банкеты и детские праздники?",
    answer: "Да, мы с удовольствием организуем для вас банкет. В кафе есть детский уголок, поэтому это отличное место для семейных праздников."
  },
  {
    question: "Есть ли вегетарианские блюда?",
    answer: "Конечно! В нашем меню большой выбор блюд без мяса: от классической «Маргариты» до овощных салатов и крем-супов."
  }
];

export default function Questions() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="questions" className="py-24 relative z-10 block">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-center text-slate-900 mb-12">Частые вопросы</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
             <div 
               key={idx} 
               className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl overflow-hidden hover:bg-white/60 transition"
             >
               <button 
                 onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                 className="w-full px-6 py-5 flex justify-between items-center text-left text-slate-900 font-bold"
               >
                 <span>{faq.question}</span>
                 <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
               </button>
               
               {openIdx === idx && (
                 <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm font-medium">
                   {faq.answer}
                 </div>
               )}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
