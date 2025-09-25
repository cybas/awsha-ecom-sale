import Hero from '@/components/hero';
import ProductGrid from '@/components/product-grid';
import { products } from '@/data/products';
import type { Metadata } from 'next';

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

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="products" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Festive Favourites
          </h2>
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
