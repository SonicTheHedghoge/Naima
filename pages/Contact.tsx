import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TEXTS } from '../constants';
import { Section } from '../components/Section';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXTS[language];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send form data would go here
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
        <Section>
            <div className="max-w-4xl mx-auto bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Info Side */}
                <div className="bg-brand-dark text-white p-12 md:w-5/12">
                    <h2 className="font-serif text-3xl mb-6">{t.contact.headline}</h2>
                    <p className="text-white/70 mb-8 leading-relaxed">
                        {language === 'FR' 
                        ? "Pour toute demande ou conseil, contactez-nous via formulaire, téléphone ou email." 
                        : "For inquiries or advice, contact us via form, phone, or email."}
                    </p>
                    <div className="space-y-6 text-sm">
                        <p className="font-bold text-brand-gold uppercase tracking-wider">Email</p>
                        <p>djerbainnovationnaima@gmail.com</p>
                        
                        <p className="font-bold text-brand-gold uppercase tracking-wider mt-6">Phone</p>
                        <p>+216 58 419 590</p>
                        <p>+216 58 428 407</p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-12 md:w-7/12">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <h3 className="font-serif text-2xl mb-4 text-brand-gold">{t.contact.success}</h3>
                            <button onClick={() => setSubmitted(false)} className="text-sm underline text-gray-500">
                                {language === 'FR' ? 'Envoyer un autre message' : 'Send another message'}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">{t.contact.formName}</label>
                                <input required type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">{t.contact.formEmail}</label>
                                <input required type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">{t.contact.formMessage}</label>
                                <textarea required rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-gold transition-colors"></textarea>
                            </div>
                            <button type="submit" className="bg-brand-dark text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors w-full md:w-auto">
                                {t.contact.formSend}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    </div>
  );
};