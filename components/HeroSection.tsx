'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ featuredArticle }: { featuredArticle: any }) {
  if (!featuredArticle) {
    return (
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-900 text-center px-4 overflow-hidden">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="z-10 max-w-4xl"
         >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
               The Voice of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Resistance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
               Uncovering truth, advocating for rights, and sharing the Rohingya story with the world.
            </p>
            <Link href="/news" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/20">
               Explore Stories
            </Link>
         </motion.div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[65vh] md:h-[75vh] bg-gray-900 group overflow-hidden">
       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 z-10" />
       <motion.img 
         initial={{ scale: 1.1, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 1.5 }}
         src={featuredArticle.image || 'https://images.unsplash.com/photo-1576675784432-99494141205c?q=80&w=2072&auto=format&fit=crop'} 
         alt={featuredArticle.title}
         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
       />
       <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 bg-gradient-to-t from-black via-black/60 to-transparent pt-32">
          <div className="max-w-7xl mx-auto">
             <motion.span 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide mb-3 shadow-sm"
             >
                Featured Story
             </motion.span>
             <Link href={`/news/${featuredArticle.slug}`} className="block group/title">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 group-hover/title:underline decoration-red-500 underline-offset-8 transition-all"
                >
                   {featuredArticle.title}
                </motion.h1>
             </Link>
             <motion.p 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.9 }}
               className="text-gray-200 text-lg md:text-xl max-w-3xl line-clamp-2 md:line-clamp-3 mb-6 font-light"
             >
                {featuredArticle.content.replace(/<[^>]+>/g, '')}
             </motion.p>
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.2 }}
             >
                <Link 
                  href={`/news/${featuredArticle.slug}`}
                  className="inline-flex items-center text-white font-semibold border-b-2 border-red-500 pb-1 hover:text-red-400 hover:border-red-400 transition-colors"
                >
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
             </motion.div>
          </div>
       </div>
    </section>
  );
}
