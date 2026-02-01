import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TEXTS } from '../constants';
import { Section } from '../components/Section';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Showrooms: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXTS[language];

  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
       <Section>
            <h1 className="font-serif text-4xl md:text-5xl text-center mb-16">{t.nav.showrooms}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Location 1 */}
                <div className="bg-white p-8 md:p-12 shadow-sm">
                     <div className="h-64 bg-gray-200 mb-8 rounded-sm overflow-hidden">
                         {/* Placeholder for Map or Shop Image */}
                         <img src="https://picsum.photos/seed/shop1/800/400" alt="Showroom 1" className="w-full h-full object-cover" />
                     </div>
                     <h2 className="font-serif text-2xl mb-6">Showroom El May</h2>
                     <div className="space-y-4 text-gray-600">
                         <div className="flex items-start gap-3">
                             <MapPin className="text-brand-gold flex-shrink-0 mt-1" />
                             <span>Rte Houmt Essouk Km 8, El May,<br/>Djerba, Tunisia</span>
                         </div>
                         <div className="flex items-center gap-3">
                             <Phone className="text-brand-gold flex-shrink-0" />
                             <span>+216 58 419 590</span>
                         </div>
                         <div className="flex items-start gap-3">
                             <Clock className="text-brand-gold flex-shrink-0 mt-1" />
                             <div>
                                 <p>Mon - Sat: 9:00 – 20:00</p>
                                 <p>Sun: 10:00 – 20:00</p>
                             </div>
                         </div>
                     </div>
                </div>

                {/* Location 2 */}
                <div className="bg-white p-8 md:p-12 shadow-sm">
                     <div className="h-64 bg-gray-200 mb-8 rounded-sm overflow-hidden">
                         <img src="https://picsum.photos/seed/shop2/800/400" alt="Showroom 2" className="w-full h-full object-cover" />
                     </div>
                     <h2 className="font-serif text-2xl mb-6">Showroom Houmt Essouk</h2>
                     <div className="space-y-4 text-gray-600">
                         <div className="flex items-start gap-3">
                             <MapPin className="text-brand-gold flex-shrink-0 mt-1" />
                             <span>Rte Zaim Salah Ben Youssef,<br/>Houmt Essouk, Djerba</span>
                         </div>
                         <div className="flex items-center gap-3">
                             <Phone className="text-brand-gold flex-shrink-0" />
                             <span>+216 58 428 407</span>
                         </div>
                         <div className="flex items-start gap-3">
                             <Clock className="text-brand-gold flex-shrink-0 mt-1" />
                             <div>
                                 <p>Mon - Sat: 9:00 – 20:00</p>
                                 <p>Sun: 10:00 – 20:00</p>
                             </div>
                         </div>
                     </div>
                </div>
            </div>

            {/* Embed Map Placeholder */}
            <div className="mt-16 w-full h-[400px] bg-gray-300 flex items-center justify-center text-gray-500">
                <p className="font-bold uppercase tracking-widest">Google Maps Embed Would Go Here</p>
            </div>
       </Section>
    </div>
  );
};