import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TEXTS } from '../constants';
import { Section } from '../components/Section';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXTS[language];

  return (
    <div className="pt-24 min-h-screen">
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/seed/workshop/1920/1080")' }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white font-serif text-5xl md:text-7xl">{t.nav.about}</h1>
        </div>
      </div>
      
      <Section className="text-center">
         <h2 className="font-serif text-3xl mb-8">{t.about.headline}</h2>
         <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 mb-12">
            {t.about.paragraph}
         </p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-gray-200 pt-16">
            <div className="p-4">
                <h3 className="font-serif text-2xl mb-4 text-brand-gold">Design</h3>
                <p className="text-sm text-gray-500">Modern elegance tailored to your lifestyle.</p>
            </div>
            <div className="p-4 md:border-l md:border-r border-gray-200">
                <h3 className="font-serif text-2xl mb-4 text-brand-gold">Comfort</h3>
                <p className="text-sm text-gray-500">Ergonomics meeting luxury in every piece.</p>
            </div>
            <div className="p-4">
                <h3 className="font-serif text-2xl mb-4 text-brand-gold">Quality</h3>
                <p className="text-sm text-gray-500">Durable materials built to last a lifetime.</p>
            </div>
         </div>
      </Section>
      
      <Section dark className="text-center">
          <h2 className="font-serif text-3xl mb-6 text-white">
              {language === 'FR' ? "Notre Histoire" : "Our Story"}
          </h2>
          <div className="max-w-4xl mx-auto text-white/80 leading-loose">
              <p className="mb-4">
                  {language === 'FR' 
                  ? "Fondée à Djerba, Innovation Naima est née d'une passion pour le beau et le fonctionnel. Nous avons commencé comme un petit atelier local et sommes devenus une référence pour les intérieurs de prestige en Tunisie."
                  : "Founded in Djerba, Innovation Naima was born from a passion for the beautiful and the functional. We started as a small local workshop and have grown into a benchmark for prestigious interiors in Tunisia."}
              </p>
          </div>
      </Section>
    </div>
  );
};