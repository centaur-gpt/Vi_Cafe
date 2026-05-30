import React from 'react';
import photo1 from '../assets/images/regenerated_image_1780151358664.jpg';
import photo2 from '../assets/images/regenerated_image_1780151365649.jpg';

const photos = [
  photo1,
  photo2,
  "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function Photos() {
  return (
    <section id="photos" className="py-20 relative z-10 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-center text-slate-900 mb-12">Атмосфера и блюда</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[32px] aspect-[4/5] border border-white/50 backdrop-blur-md">
              <img 
                src={photo} 
                alt="Фото интерьера и блюд Vi cafe" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
