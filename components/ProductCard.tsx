import React from 'react';
import { Product, Language } from '../types';
import { TEXTS } from '../constants';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  language: Language;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, language }) => {
  const t = TEXTS[language];

  return (
    <div className="group cursor-pointer w-full">
      <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-100">
        <img 
          src={product.image} 
          alt={language === 'FR' ? product.nameFR : product.nameEN} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="bg-white/95 backdrop-blur-sm p-4 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest">{t.collections.viewDetails}</span>
                <Plus size={16} />
            </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-2xl font-normal group-hover:italic transition-all duration-300">
            {language === 'FR' ? product.nameFR : product.nameEN}
        </h3>
        <div className="flex justify-between items-baseline border-t border-gray-200 pt-3 mt-2">
             <p className="text-xs text-gray-400 font-bold uppercase tracking-widest line-clamp-1 max-w-[70%]">
                {language === 'FR' ? product.descriptionFR : product.descriptionEN}
            </p>
            <span className="text-sm font-serif italic">{product.price}</span>
        </div>
      </div>
    </div>
  );
};