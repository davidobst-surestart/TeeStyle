import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium T-Shirts for
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Every Style</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Premium t-shirts that blend comfort, style, and quality for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Shop Collection
                <ArrowRight size={20} />
              </button>
              <button className="border border-white/30 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                View Lookbook
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-2xl transform rotate-3 opacity-80"></div>
            <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800)'
                }}
              ></div>
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">T</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Premium Quality</h3>
                <p className="text-slate-600">Crafted with care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}