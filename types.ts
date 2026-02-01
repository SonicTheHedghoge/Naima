export type Language = 'FR' | 'EN';

export interface Product {
  id: string;
  nameFR: string;
  nameEN: string;
  category: 'indoor' | 'outdoor' | 'decor' | 'custom';
  price: string;
  image: string;
  descriptionFR: string;
  descriptionEN: string;
}

export interface Testimonial {
  id: string;
  name: string;
  textFR: string;
  textEN: string;
  role?: string;
}

export interface Service {
  id: string;
  titleFR: string;
  titleEN: string;
  descFR: string;
  descEN: string;
  icon: string;
}

export interface ContentDictionary {
  nav: {
    home: string;
    about: string;
    collections: string;
    services: string;
    showrooms: string;
    contact: string;
    book: string;
  };
  hero: {
    headline: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    headline: string;
    paragraph: string;
    cta: string;
    values: string;
  };
  collections: {
    headline: string;
    indoor: string;
    outdoor: string;
    decor: string;
    custom: string;
    viewDetails: string;
    requestQuote: string;
  };
  services: {
    headline: string;
    cta: string;
  };
  contact: {
    headline: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    success: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}