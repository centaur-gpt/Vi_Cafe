import { MapPin, Clock, Phone, Utensils, Star, Coffee, Users, CreditCard, ParkingCircle, Train, Accessibility } from 'lucide-react';
import React from 'react';

export default function Info() {
  return (
    <section id="info" className="py-20 relative z-10 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 mb-4">Информация о нас</h2>
          <p className="text-slate-600 text-lg">Всё, что вам нужно знать перед визитом</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Rating */}
          <div className="bg-white/60 p-6 rounded-[32px] border border-white/80 flex items-start gap-4">
             <div className="bg-white p-3 rounded-xl border border-slate-100 text-amber-600">
               <Star className="w-6 h-6 fill-amber-600" />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-lg mb-1">Рейтинг 3.9</h3>
               <p className="text-slate-600 text-sm">На основе 14 оценок гостей</p>
             </div>
          </div>

          {/* Time & Capacity */}
          <div className="bg-white/60 p-6 rounded-[32px] border border-white/80 flex items-start gap-4">
             <div className="bg-white p-3 rounded-xl border border-slate-100 text-slate-800">
               <Clock className="w-6 h-6" />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-lg mb-1">Время работы</h3>
               <p className="text-slate-600 text-sm mb-1 font-bold">Завтрак: 10:00 - 14:00</p>
               <p className="text-slate-600 text-sm font-bold">Бизнес-ланч: 12:00 - 16:00 (от 500 ₽)</p>
             </div>
          </div>

           {/* Capacity */}
           <div className="bg-white/60 p-6 rounded-[32px] border border-white/80 flex items-start gap-4">
             <div className="bg-white p-3 rounded-xl border border-slate-100 text-slate-800">
               <Users className="w-6 h-6" />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-lg mb-1">Вместимость</h3>
               <p className="text-slate-600 text-sm">Уютный зал до 15 мест</p>
               <p className="text-slate-600 text-sm mt-1">Проведение банкетов</p>
             </div>
          </div>

          {/* Payment */}
          <div className="bg-white/60 p-6 rounded-[32px] border border-white/80 flex items-start gap-4">
             <div className="bg-white p-3 rounded-xl border border-slate-100 text-slate-800">
               <CreditCard className="w-6 h-6" />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-lg mb-1">Способы оплаты</h3>
               <p className="text-slate-600 text-sm">Оплата картой, наличными, перевод с карты, QR-код</p>
               <p className="text-slate-800 text-sm font-bold mt-2">Средний чек: 1000 ₽</p>
             </div>
          </div>

          {/* Accessibility */}
          <div className="bg-white/60 p-6 rounded-[32px] border border-white/80 flex items-start gap-4">
             <div className="bg-white p-3 rounded-xl border border-slate-100 text-slate-800">
               <Accessibility className="w-6 h-6" />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-lg mb-1">Доступная среда</h3>
               <p className="text-slate-600 text-sm">Доступный вход для людей с инвалидностью</p>
             </div>
          </div>
          
          {/* Parking & Transport */}
          <div className="bg-white/60 p-6 rounded-[32px] border border-white/80 flex items-start gap-4">
             <div className="bg-white p-3 rounded-xl border border-slate-100 text-slate-800">
               <ParkingCircle className="w-6 h-6" />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-lg mb-1">Парковка</h3>
               <p className="text-slate-600 text-sm">240 бесплатных мест</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
