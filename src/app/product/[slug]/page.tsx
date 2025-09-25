import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

import { products } from '@/data/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Price from '@/components/price';
import { Card } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import PdpActions from './pdp-actions';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Awshad`,
    description: product.shortDesc,
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
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const placeholderImage = PlaceHolderImages.find(
    (img) => img.imageUrl === product.image
  );

  return (
    <div className="container py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="md:sticky md:top-24 self-start">
          <Card className="overflow-hidden">
            <div className="aspect-[4/5]">
              <Image
                src={product.image}
                alt={product.image_alt}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                priority
                data-ai-hint={placeholderImage?.imageHint}
              />
            </div>
          </Card>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <div className="mt-4">
            <Price mrp={product.mrp} sale={product.sale} />
          </div>
          <p className="mt-4 text-lg text-muted-foreground">{product.shortDesc}</p>

          <div className="mt-8">
            <PdpActions product={product} />
          </div>

          <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="additionalInfo">
                  Additional Information
                </TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent
                value="description"
                className="prose prose-sm max-w-none mt-4 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <TabsContent
                value="additionalInfo"
                className="prose prose-sm max-w-none mt-4 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: product.additionalInfo }}
              />
              <TabsContent value="reviews" className="mt-4">
                <p className="text-muted-foreground">No reviews yet.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
