import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { PRODUCTS } from '@/data/products';
import Price from '@/components/price';
import { Card } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import PdpActions from './pdp-actions';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Awshad`,
    description: product.shortDesc,
    alternates: {
      canonical: product.wpUrl,
    },
    openGraph: {
      title: product.name,
      description: product.shortDesc,
      images: [
        {
          url: product.image,
          width: 800,
          height: 1000,
          alt: product.image_alt,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const formatComposition = (composition?: string[]) => {
    if (!composition) return null;
    return (
      <ul>
        {composition.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white">
      <div className="container py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="md:sticky md:top-24 self-start">
            <Card className="overflow-hidden">
              <div className="aspect-[1/1]">
                <Image
                  src={product.image}
                  alt={product.image_alt}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </Card>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <div className="mt-4">
              <Price mrp={product.mrp} sale={product.sale} />
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              {product.shortDesc}
            </p>
            <div className="mt-4">
              <Button variant="link" asChild className="px-0">
                <Link href={product.wpUrl} target="_blank">
                  View on awshad.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <PdpActions product={product} />
            </div>

            <div className="mt-12">
              <Tabs defaultValue="composition" className="w-full">
                <TabsList>
                  <TabsTrigger value="composition">Composition</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="composition"
                  className="prose prose-sm max-w-none mt-4 text-muted-foreground"
                >
                  {formatComposition(product.composition)}
                </TabsContent>
                <TabsContent
                  value="details"
                  className="prose prose-sm max-w-none mt-4 text-muted-foreground"
                >
                  {product.strengthMg && <p><strong>Strength:</strong> {product.strengthMg}mg</p>}
                  {product.sizeMl && <p><strong>Size:</strong> {product.sizeMl}ml</p>}
                  {product.packCount && <p><strong>Pack Size:</strong> {product.packCount} gummies</p>}
                  {product.flavor && <p><strong>Flavor:</strong> {product.flavor}</p>}
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                  <p className="text-muted-foreground">No reviews yet.</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
