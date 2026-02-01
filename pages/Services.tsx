import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TEXTS, SERVICES } from '../constants';
import { Section } from '../components/Section';
import { PenTool, Hammer, Briefcase } from 'lucide-react';

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXTS[language];

  const getIcon = (name: string) => {
    switch (name) {
      case 'PenTool': return <PenTool size={40} />;
      case 'Hammer': return <Hammer size={40} />;
      case 'Briefcase': return <Briefcase size={40} />;
      default: return <PenTool size={40} />;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
      <Section className="text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">{t.services.headline}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
           {SERVICES.map(service => (
             <div key={service.id} className="bg-white p-10 rounded-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-gold">
                <div className="text-brand-gold mb-6 flex justify-center">
                    {getIcon(service.icon)}
                </div>
                <h3 className="font-serif text-2xl mb-4">
                    {language === 'FR' ? service.titleFR : service.titleEN}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                    {language === 'FR' ? service.descFR : service.descEN}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
                    {t.services.cta}
                </button>
             </div>
           ))}
        </div>
      </Section>
      
      <div className="h-[400px] bg-fixed bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: 'url("https://picsum.photos/seed/designer/1920/800")' }}>
          <div className="absolute inset-0 bg-brand-dark/60"></div>
          <div className="relative z-10 text-white text-center max-w-2xl px-6">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                {language === 'FR' ? "Transformons votre vision en réalité" : "Let's turn your vision into reality"}
              </h2>
              <button className="bg-brand-gold text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-colors">
                {t.nav.book}
              </button>
          </div>
      </div>
    </div>
  );
};