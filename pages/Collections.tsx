import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TEXTS, PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Reveal } from '../components/Reveal';

export const Collections: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXTS[language];
  const [filter, setFilter] = useState<'all' | 'indoor' | 'outdoor' | 'decor'>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: language === 'FR' ? 'Tout' : 'All' },
    { id: 'indoor', label: t.collections.indoor },
    { id: 'outdoor', label: t.collections.outdoor },
    { id: 'decor', label: t.collections.decor },
  ];

  return (
    <div className="pt-32 min-h-screen bg-brand-cream">
       <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <Reveal>
                <h1 className="font-serif text-6xl md:text-8xl text-brand-dark">{t.collections.headline}</h1>
            </Reveal>
            <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-8">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id as any)}
                            className={`text-xs font-bold uppercase tracking-widest transition-all pb-1 ${
                                filter === cat.id 
                                ? 'text-brand-dark border-b border-brand-dark' 
                                : 'text-gray-400 border-b border-transparent hover:text-brand-dark'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </Reveal>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 pb-32">
            {filteredProducts.map((product, index) => (
                <div key={product.id} className="break-inside-avoid">
                    <Reveal delay={index * 0.1} width="100%">
                        <ProductCard product={product} language={language} />
                    </Reveal>
                </div>
            ))}
          </div>
       </div>
    </div>
  );
};