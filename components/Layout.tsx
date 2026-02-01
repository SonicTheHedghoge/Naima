import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { TEXTS } from '../constants';
import { Menu, X, Facebook, Instagram, ArrowUpRight, Globe } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, toggleLanguage } = useLanguage();
  const t = TEXTS[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-dark overflow-hidden">
      
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'bg-brand-cream/80 backdrop-blur-md py-4 border-b border-gray-200/50' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 relative group">
            <div className="flex flex-col">
                <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight uppercase leading-none transition-colors duration-500 ${
                    !scrolled && isHome && !isMenuOpen ? 'text-white' : 'text-brand-dark'
                }`}>
                Innovation
                </span>
                <span className={`text-[0.65rem] tracking-[0.4em] uppercase font-sans font-medium text-brand-gold ml-1`}>
                    Naima
                </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {[
              { path: '/', label: t.nav.home },
              { path: '/collections', label: t.nav.collections },
              { path: '/showrooms', label: t.nav.showrooms },
              { path: '/about', label: t.nav.about },
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative text-xs font-bold uppercase tracking-widest transition-colors duration-300 group ${
                   !scrolled && isHome ? 'text-white/80 hover:text-white' : 'text-brand-dark/70 hover:text-brand-dark'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${!scrolled && isHome ? 'bg-white' : 'bg-brand-dark'}`}></span>
              </Link>
            ))}
            
            <button 
                onClick={toggleLanguage} 
                className={`text-xs font-bold border rounded-full px-4 py-1.5 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 ${
                    !scrolled && isHome 
                    ? 'text-white border-white/30 hover:bg-white/10' 
                    : 'text-brand-dark border-brand-dark/20 hover:border-brand-dark'
                }`}
            >
                <Globe size={12} />
                {language}
            </button>

            <Link 
                to="/contact" 
                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:-translate-y-1 ${
                    !scrolled && isHome
                    ? 'bg-white text-brand-dark hover:bg-brand-gold hover:text-white'
                    : 'bg-brand-dark text-white hover:bg-brand-gold'
                }`}
            >
                {t.nav.book}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`transition-colors duration-300 ${!scrolled && isHome && !isMenuOpen ? 'text-white' : 'text-brand-dark'}`}
            >
              {isMenuOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Full Screen Cinematic */}
        <div 
            className={`fixed inset-0 bg-brand-cream z-40 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] clip-path-circle ${
            isMenuOpen ? '[clip-path:circle(150%_at_100%_0)]' : '[clip-path:circle(0%_at_100%_0)]'
            }`}
        >
             <div className="h-full flex flex-col justify-center items-center gap-8 relative overflow-hidden">
                {/* Background decorative text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-brand-stone opacity-20 whitespace-nowrap pointer-events-none select-none">
                    NAIMA
                </div>

                {[
                  { path: '/', label: t.nav.home },
                  { path: '/collections', label: t.nav.collections },
                  { path: '/services', label: t.nav.services },
                  { path: '/showrooms', label: t.nav.showrooms },
                  { path: '/about', label: t.nav.about },
                  { path: '/contact', label: t.nav.contact },
                ].map((link, i) => (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`text-4xl md:text-5xl font-serif text-brand-dark hover:text-brand-gold hover:italic transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="mt-8 flex gap-6">
                    <button onClick={toggleLanguage} className="text-sm font-bold uppercase tracking-widest border-b border-brand-dark pb-1">
                        {language === 'FR' ? 'English' : 'Français'}
                    </button>
                </div>
             </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative">
        {children}
      </main>

      {/* Footer - High Editorial Style */}
      <footer className="bg-brand-dark text-brand-stone pt-32 pb-12 relative overflow-hidden">
        {/* Large Watermark */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-5 select-none pointer-events-none">
             <span className="text-[25vw] font-serif font-bold text-white whitespace-nowrap -ml-[5vw]">NAIMA</span>
        </div>

        <div className="container mx-auto px-8 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                <div className="max-w-md">
                    <h3 className="font-serif text-3xl md:text-4xl mb-8 text-white">Innovation Naima</h3>
                    <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
                        {t.footer.tagline}
                    </p>
                    <Link to="/contact" className="group inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all">
                        <span className="uppercase tracking-widest text-xs font-bold">{t.nav.book}</span>
                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

                <div className="flex gap-16 md:gap-32 flex-wrap">
                    <div>
                        <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-8 text-brand-gold">Menu</h4>
                        <ul className="space-y-4 font-serif text-xl md:text-2xl text-gray-400">
                            <li><Link to="/collections" className="hover:text-white hover:pl-2 transition-all block">Collections</Link></li>
                            <li><Link to="/services" className="hover:text-white hover:pl-2 transition-all block">Services</Link></li>
                            <li><Link to="/about" className="hover:text-white hover:pl-2 transition-all block">About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-8 text-brand-gold">Connect</h4>
                        <ul className="space-y-4 font-serif text-xl md:text-2xl text-gray-400">
                            <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Instagram</a></li>
                            <li><a href="#" className="hover:text-white hover:pl-2 transition-all block">Facebook</a></li>
                            <li><a href="mailto:contact@naima.com" className="hover:text-white hover:pl-2 transition-all block">Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-widest gap-4">
                <p>{t.footer.copyright}</p>
                <div className="flex gap-8">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};