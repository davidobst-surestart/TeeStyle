import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium T-Shirts for
              <span className="block text-orange-400">Every Style</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our curated collection of high-quality, comfortable t-shirts 
              designed for the modern lifestyle. From classic fits to trending designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105">
                Shop Collection
                <ArrowRight size={20} />
              </button>
              <button className="border border-white/30 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View Lookbook
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl transform rotate-3 opacity-80"></div>
            <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-slate-700">T</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Crafted with care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}