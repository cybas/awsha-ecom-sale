import Hero from '@/components/hero';
import ProductGrid from '@/components/product-grid';
import { PRODUCTS } from '@/data/products';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Truck, Lock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Awshad Diwali Sale | Premium Wellness Products',
  description:
    'Celebrate Diwali with Awshad. Enjoy exclusive discounts on our range of premium cannabis wellness products for a limited time.',
  openGraph: {
    title: 'Awshad Diwali Sale',
    description: 'Illuminate your wellness this festive season with exclusive offers.',
    type: 'website',
  },
};

const trustFeatures = [
  { icon: ShieldCheck, text: "Lab-tested" },
  { icon: Truck, text: "Discreet, fast shipping" },
  { icon: Lock, text: "Secure checkout" },
  { icon: MessageCircle, text: "Expert support" },
];


export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="sale-grid" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12" style={{ color: 'hsl(var(--aw-green))' }}>
            Festive Favourites
          </h2>
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>

      <section className="py-12 border-t bg-background">
        <div className="container">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <feature.icon className="h-8 w-8" style={{ color: 'hsl(var(--aw-green))' }} />
                <span className="text-sm text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
            Ayurvedic wellness products. Not for minors. Use as directed. This is not medical advice.
          </p>
        </div>
      </section>
    </>
  );
}
