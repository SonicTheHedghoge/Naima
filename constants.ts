import { ContentDictionary, Product, Service, Testimonial } from './types';

export const TEXTS: Record<'FR' | 'EN', ContentDictionary> = {
  FR: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      collections: "Collections",
      services: "Services",
      showrooms: "Showrooms",
      contact: "Contact",
      book: "Rendez-vous"
    },
    hero: {
      headline: "Transformez votre espace avec l’élégance et le confort d’Innovation Naima",
      subtext: "Découvrez nos collections de meubles et décorations intérieures et extérieures, alliant luxe et praticité.",
      ctaPrimary: "Explorer les collections",
      ctaSecondary: "Visiter le showroom"
    },
    about: {
      headline: "À propos d’Innovation Naima",
      paragraph: "Innovation Naima propose une large gamme de meubles et objets de décoration alliant modernité, confort et élégance. Notre mission est de transformer chaque espace en expérience de vie unique grâce à des créations durables et esthétiques. Nous combinons le meilleur du design moderne et du confort durable.",
      cta: "Découvrir nos valeurs",
      values: "Qualité • Artisanat • Design"
    },
    collections: {
      headline: "Nos Collections",
      indoor: "Meubles Intérieurs",
      outdoor: "Meubles Extérieurs",
      decor: "Décoration & Accessoires",
      custom: "Sur Mesure",
      viewDetails: "Voir la collection",
      requestQuote: "Demander un devis"
    },
    services: {
      headline: "Nos Services",
      cta: "Demander un service"
    },
    contact: {
      headline: "Contactez-nous",
      formName: "Nom",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Envoyer",
      success: "Merci, nous vous répondrons sous 24h !"
    },
    footer: {
      tagline: "Design Your Life with Comfort & Style",
      copyright: "© 2024 Innovation Naima. Tous droits réservés."
    }
  },
  EN: {
    nav: {
      home: "Home",
      about: "About Us",
      collections: "Collections",
      services: "Services",
      showrooms: "Showrooms",
      contact: "Contact",
      book: "Book Visit"
    },
    hero: {
      headline: "Transform Your Space with Elegance & Comfort from Innovation Naima",
      subtext: "Explore our indoor and outdoor furniture collections, combining luxury with practicality.",
      ctaPrimary: "Explore Collections",
      ctaSecondary: "Visit Showroom"
    },
    about: {
      headline: "About Innovation Naima",
      paragraph: "Innovation Naima offers a wide range of furniture and décor items combining modernity, comfort, and elegance. Our mission is to transform every space into a unique living experience with durable, stylish creations. We blend the best of modern design with lasting comfort.",
      cta: "Discover Our Values",
      values: "Quality • Craftsmanship • Design"
    },
    collections: {
      headline: "Our Collections",
      indoor: "Indoor Furniture",
      outdoor: "Outdoor Living",
      decor: "Décor & Accessories",
      custom: "Custom Solutions",
      viewDetails: "View Collection",
      requestQuote: "Request a Quote"
    },
    services: {
      headline: "Our Services",
      cta: "Request Service"
    },
    contact: {
      headline: "Contact Us",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send",
      success: "Thank you, we’ll get back to you within 24h!"
    },
    footer: {
      tagline: "Design Your Life with Comfort & Style",
      copyright: "© 2024 Innovation Naima. All rights reserved."
    }
  }
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    nameFR: 'Canapé Djerba Luxe',
    nameEN: 'Djerba Luxury Sofa',
    category: 'indoor',
    price: 'Sur demande',
    image: 'https://picsum.photos/seed/sofa1/800/600',
    descriptionFR: 'Un canapé modulaire en tissu premium, parfait pour les grands salons.',
    descriptionEN: 'A modular premium fabric sofa, perfect for spacious living rooms.'
  },
  {
    id: '2',
    nameFR: 'Table Basse Olivier',
    nameEN: 'Olive Coffee Table',
    category: 'indoor',
    price: 'Sur demande',
    image: 'https://picsum.photos/seed/table1/800/600',
    descriptionFR: 'Table basse sculptée main avec finition bois naturel.',
    descriptionEN: 'Hand-carved coffee table with natural wood finish.'
  },
  {
    id: '3',
    nameFR: 'Ensemble Terrasse Soleil',
    nameEN: 'Sun Terrace Set',
    category: 'outdoor',
    price: 'Sur demande',
    image: 'https://picsum.photos/seed/outdoor1/800/600',
    descriptionFR: 'Résistant aux intempéries, confort maximal pour vos extérieurs.',
    descriptionEN: 'Weather-resistant, maximum comfort for your outdoor spaces.'
  },
  {
    id: '4',
    nameFR: 'Vase Céramique Artisanal',
    nameEN: 'Artisan Ceramic Vase',
    category: 'decor',
    price: 'Sur demande',
    image: 'https://picsum.photos/seed/decor1/800/600',
    descriptionFR: 'Pièce unique fabriquée par des artisans tunisiens.',
    descriptionEN: 'Unique piece crafted by Tunisian artisans.'
  },
  {
    id: '5',
    nameFR: 'Fauteuil Lounge',
    nameEN: 'Lounge Armchair',
    category: 'indoor',
    price: 'Sur demande',
    image: 'https://picsum.photos/seed/chair1/800/600',
    descriptionFR: 'Design ergonomique et velours doux.',
    descriptionEN: 'Ergonomic design and soft velvet.'
  },
  {
    id: '6',
    nameFR: 'Pergola Moderne',
    nameEN: 'Modern Pergola',
    category: 'outdoor',
    price: 'Sur demande',
    image: 'https://picsum.photos/seed/pergola/800/600',
    descriptionFR: 'Structure en aluminium pour ombrage élégant.',
    descriptionEN: 'Aluminum structure for elegant shading.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    titleFR: 'Design d’Intérieur',
    titleEN: 'Interior Design',
    descFR: 'Conseil expert pour l’agencement de vos espaces.',
    descEN: 'Expert advice for the layout of your spaces.',
    icon: 'PenTool'
  },
  {
    id: 's2',
    titleFR: 'Mobilier Sur Mesure',
    titleEN: 'Custom Furniture',
    descFR: 'Création de pièces uniques selon vos spécifications.',
    descEN: 'Creation of unique pieces according to your specifications.',
    icon: 'Hammer'
  },
  {
    id: 's3',
    titleFR: 'Aménagement Hôtelier',
    titleEN: 'Hospitality Staging',
    descFR: 'Solutions complètes pour hôtels et maisons d’hôtes.',
    descEN: 'Complete solutions for hotels and guesthouses.',
    icon: 'Briefcase'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    role: 'Homeowner',
    textFR: 'Ils ont transformé ma maison ! Service impeccable et meubles magnifiques.',
    textEN: 'They transformed my home! Impeccable service and beautiful furniture.'
  },
  {
    id: 't2',
    name: 'Hotel Dar El Bahar',
    role: 'Commercial Client',
    textFR: 'Qualité exceptionnelle pour notre terrasse extérieure. Nos clients adorent.',
    textEN: 'Exceptional quality for our outdoor terrace. Our guests love it.'
  }
];