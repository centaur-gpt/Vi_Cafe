/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Info from './components/Info';
import Reviews from './components/Reviews';
import Photos from './components/Photos';
import Questions from './components/Questions';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] font-sans text-slate-900 selection:bg-slate-900 selection:text-white relative">
      {/* Background Mesh Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-green-50 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <Menu />
          <Photos />
          <Info />
          <Reviews />
          <Questions />
          <Location />
        </main>
        <Footer />
      </div>
    </div>
  );
}
