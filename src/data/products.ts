import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImageUrl = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '';

export const products: Product[] = [
  {
    id: 1,
    slug: 'calm-focus-oil',
    name: 'Calm & Focus Oil',
    mrp: 1800,
    sale: 1499,
    size: '30ml',
    flavor: 'Peppermint',
    image: getImageUrl('product-1'),
    image_alt: 'Bottle of Awshad Calm & Focus Oil',
    shortDesc: 'A premium blend to enhance mental clarity and tranquility throughout your day.',
    description:
      '<p>Our Calm & Focus oil is formulated with a precise blend of full-spectrum cannabis extract and natural terpenes to support your daily wellness routine. It helps in managing stress, improving focus, and promoting a sense of calm without drowsiness. Perfect for a busy lifestyle.</p>',
    additionalInfo:
      '<p><strong>Strength:</strong> 1500mg</p><p><strong>Servings:</strong> 30</p><p><strong>Ingredients:</strong> Full-Spectrum Cannabis Sativa L. Extract, MCT Oil, Natural Peppermint Flavoring.</p>',
  },
  {
    id: 2,
    slug: 'sleep-well-capsules',
    name: 'Sleep Well Capsules',
    mrp: 2200,
    sale: 1999,
    size: '60 Capsules',
    image: getImageUrl('product-2'),
    image_alt: 'Box of Awshad Sleep Well Capsules',
    shortDesc: 'Drift into a restorative sleep with our specially formulated vegan capsules.',
    description:
      '<p>Experience deep and restful sleep with our Sleep Well Capsules. Each capsule contains a synergistic blend of cannabis extract and melatonin, designed to regulate your sleep cycle and improve sleep quality. Wake up refreshed and revitalized.</p>',
    additionalInfo:
      '<p><strong>Strength:</strong> 900mg</p><p><strong>Servings:</strong> 60</p><p><strong>Ingredients:</strong> Full-Spectrum Cannabis Sativa L. Extract, Melatonin, Chamomile Extract, Vegan Capsule.</p>',
  },
  {
    id: 3,
    slug: 'relief-topical-balm',
    name: 'Relief Topical Balm',
    mrp: 1500,
    sale: 1249,
    size: '50g',
    image: getImageUrl('product-3'),
    image_alt: 'Jar of Awshad Relief Topical Balm',
    shortDesc: 'Targeted relief for sore muscles and joints with a soothing, natural formula.',
    description:
      '<p>Our Relief Topical Balm provides localized relief for muscle aches, joint pain, and inflammation. The rich formula combines the power of full-spectrum cannabis extract with cooling menthol and nourishing essential oils for fast-acting comfort.</p>',
    additionalInfo:
      '<p><strong>Strength:</strong> 1000mg</p><p><strong>Application:</strong> Topical</p><p><strong>Ingredients:</strong> Full-Spectrum Cannabis Sativa L. Extract, Shea Butter, Coconut Oil, Menthol, Eucalyptus Oil.</p>',
  },
  {
    id: 4,
    slug: 'everyday-wellness-oil',
    name: 'Everyday Wellness Oil',
    mrp: 1650,
    sale: 1399,
    size: '30ml',
    flavor: 'Natural',
    image: getImageUrl('product-4'),
    image_alt: 'Bottle of Awshad Everyday Wellness Oil',
    shortDesc: 'A versatile oil to support your overall health and maintain balance.',
    description:
      '<p>Incorporate our Everyday Wellness Oil into your daily routine to support overall homeostasis. This unflavored, versatile oil can be taken sublingually or added to your favorite food and beverages to promote balance from within.</p>',
    additionalInfo:
      '<p><strong>Strength:</strong> 1000mg</p><p><strong>Servings:</strong> 30</p><p><strong>Ingredients:</strong> Full-Spectrum Cannabis Sativa L. Extract, MCT Oil.</p>',
  },
  {
    id: 5,
    slug: 'pet-care-oil',
    name: 'Pet Care Oil',
    mrp: 1300,
    sale: 999,
    size: '30ml',
    image: getImageUrl('product-5'),
    image_alt: 'Bottle of Awshad Pet Care Oil',
    shortDesc: 'Support your furry friend’s well-being with our pet-friendly formula.',
    description:
      '<p>Our Pet Care Oil is specially formulated to help with anxiety, joint pain, and overall wellness for your pets. Made with high-quality, full-spectrum extract and salmon oil, it’s a safe and effective way to care for your companion.</p>',
    additionalInfo:
      '<p><strong>Strength:</strong> 500mg</p><p><strong>For:</strong> Dogs & Cats</p><p><strong>Ingredients:</strong> Full-Spectrum Cannabis Sativa L. Extract, Salmon Oil.</p>',
  },
];
