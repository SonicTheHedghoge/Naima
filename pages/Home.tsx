import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TEXTS, PRODUCTS, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { ProductCard } from '../components/ProductCard';
import { Reveal, TextReveal } from '../components/Reveal';
import { ArrowRight, Star, Play } from 'lucide-react';

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXTS[language];

  return (
    <div className="bg-brand-cream overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative h-[110vh] min-h-[800px] w-full bg-brand-dark overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image with Slow Zoom */}
        <div className="absolute inset-0 opacity-60">
             <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite_alternate]"
                style={{ animationDuration: '30s' }}
                alt="Luxury Interior"
             />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 mix-blend-screen">
          <Reveal delay={0.2} width="100%">
             <h1 className="font-serif text-[12vw] md:text-[9vw] leading-[0.85] text-white tracking-tighter">
                INNOVATION
             </h1>
          </Reveal>
          <Reveal delay={0.4} width="100%">
             <h1 className="font-serif text-[12vw] md:text-[9vw] leading-[0.85] text-transparent stroke-text tracking-tighter italic" 
                 style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                NAIMA
             </h1>
          </Reveal>
        </div>

        {/* Floating Tagline */}
        <div className="absolute bottom-32 left-8 md:left-20 max-w-xs text-white z-20 hidden md:block">
            <TextReveal delay={1}>
                <p className="font-sans text-xs font-bold tracking-widest uppercase mb-4 text-brand-gold">Est. Tunisia</p>
                <p className="font-serif text-lg leading-relaxed opacity-90">{t.hero.subtext}</p>
            </TextReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 animate-bounce opacity-50">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-brand-gold py-4 overflow-hidden whitespace-nowrap border-y border-brand-gold">
        <div className="animate-marquee flex gap-12 text-brand-dark font-bold uppercase tracking-widest text-xs md:text-sm">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="flex items-center gap-12">
                    <span>Luxury Furniture</span>
                    <span className="w-2 h-2 rounded-full bg-brand-dark"></span>
                    <span>Interior Design</span>
                    <span className="w-2 h-2 rounded-full bg-brand-dark"></span>
                    <span>Custom Craftsmanship</span>
                    <span className="w-2 h-2 rounded-full bg-brand-dark"></span>
                </span>
            ))}
        </div>
      </div>

      {/* Introduction / About - Asymmetric Layout */}
      <Section className="relative">
         <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center">
            <div className="w-full md:w-1/2">
                <Reveal>
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop" 
                            alt="Detail" 
                            className="w-[80%] ml-auto aspect-[3/4] object-cover"
                        />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-stone p-8 flex items-center justify-center text-center rounded-full rotate-12 shadow-xl hidden md:flex">
                            <span className="font-serif italic text-brand-dark text-lg">Handcrafted <br/> in Djerba</span>
                        </div>
                    </div>
                </Reveal>
            </div>
            <div className="w-full md:w-1/2">
                <Reveal delay={0.2}>
                    <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Our Philosophy</span>
                    <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                        {language === 'FR' ? "L'art de vivre," : "The art of living,"} <br/>
                        <span className="italic text-gray-400">{language === 'FR' ? "redéfini." : "redefined."}</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                        {t.about.paragraph}
                    </p>
                    <Link to="/about" className="inline-flex items-center gap-2 text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors font-bold uppercase tracking-widest text-xs">
                        {t.about.cta} <ArrowRight size={14} />
                    </Link>
                </Reveal>
            </div>
         </div>
      </Section>

      {/* Featured Collections - Editorial Grid */}
      <section className="py-20 md:py-32 px-4 md:px-12 bg-white">
        <Reveal width="100%">
            <div className="flex justify-between items-end mb-20 border-b border-gray-100 pb-8">
                <h2 className="font-serif text-4xl md:text-6xl text-brand-dark">{t.collections.headline}</h2>
                <Link to="/collections" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">
                    View All <ArrowRight size={14} />
                </Link>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Big Feature */}
            <div className="md:col-span-8">
                <div className="group relative overflow-hidden h-[600px] w-full cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Feature" />
                     <div className="absolute bottom-8 left-8 text-white z-10">
                        <h3 className="font-serif text-4xl mb-2">{t.collections.indoor}</h3>
                        <p className="text-sm font-light opacity-90">Sofas, Tables & More</p>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
            </div>

            {/* Side Column */}
            <div className="md:col-span-4 flex flex-col gap-8">
                 <div className="group relative overflow-hidden h-[280px] w-full cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1595246140625-573b715d1128?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Feature" />
                     <div className="absolute bottom-6 left-6 text-white z-10">
                        <h3 className="font-serif text-2xl mb-1">{t.collections.outdoor}</h3>
                        <span className="text-xs uppercase tracking-widest border-b border-white/50 pb-1">Explore</span>
                     </div>
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                 </div>
                 <div className="bg-brand-cream h-[288px] p-8 flex flex-col justify-center items-center text-center border border-brand-stone hover:bg-brand-stone transition-colors cursor-pointer">
                    <h3 className="font-serif text-3xl mb-4 italic text-brand-dark">{t.collections.custom}</h3>
                    <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">Tailored to your space</p>
                    <div className="w-12 h-12 rounded-full border border-brand-dark flex items-center justify-center">
                        <ArrowRight size={16} />
                    </div>
                 </div>
            </div>
        </div>

        {/* Product Carousel / Horizontal Scroll */}
        <div className="mt-20">
             <Reveal>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRODUCTS.slice(0, 3).map((product, i) => (
                        <div key={product.id} className={i === 1 ? 'md:translate-y-12' : ''}>
                             <ProductCard product={product} language={language} />
                        </div>
                    ))}
                 </div>
             </Reveal>
        </div>
      </section>

      {/* Video / Mood Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40" alt="Mood" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
            <Reveal>
                <div className="w-20 h-20 rounded-full border-2 border-brand-dark flex items-center justify-center mx-auto mb-8 cursor-pointer hover:bg-brand-dark hover:text-white transition-all group">
                    <Play size={24} className="ml-1" fill="currentColor" />
                </div>
                <h2 className="font-serif text-5xl md:text-7xl mb-6 text-brand-dark">
                    "{language === 'FR' ? 'Le design est l\'intelligence rendue visible.' : 'Design is intelligence made visible.'}"
                </h2>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                    Innovation Naima Studios
                </p>
            </Reveal>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
             <div>
                 <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-8 block">Testimonials</span>
                 <h2 className="font-serif text-4xl mb-8">Trusted by discerning<br/>homeowners & hotels.</h2>
                 <div className="flex gap-2">
                     <button className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors"><ArrowRight className="rotate-180" size={16}/></button>
                     <button className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors"><ArrowRight size={16}/></button>
                 </div>
             </div>
             <div>
                 {TESTIMONIALS.slice(0, 1).map(testimonial => (
                    <Reveal key={testimonial.id}>
                        <div className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            "{language === 'FR' ? testimonial.textFR : testimonial.textEN}"
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="font-bold text-sm uppercase tracking-widest">{testimonial.name}</div>
                            <div className="w-12 h-[1px] bg-brand-gold"></div>
                            <div className="text-xs text-gray-500">{testimonial.role}</div>
                        </div>
                    </Reveal>
                 ))}
             </div>
         </div>
      </Section>

    </div>
  );
};