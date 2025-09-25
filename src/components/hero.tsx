import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="container grid md:grid-cols-2 gap-8 items-center min-h-[60vh] md:min-h-[70vh] py-12 md:py-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <Badge variant="secondary" className="mb-4">
            Diwali Sale • Limited Time
          </Badge>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            style={{ color: 'hsl(var(--aw-green))' }}
          >
            Light up your wellness this Diwali
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground max-w-xl">
            Festive prices on select products. India-wide delivery. Secure checkout.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full md:w-auto">
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
              <Link href="#sale-grid">Shop Diwali Offers</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/learn/lab-reports">View Lab Reports</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 h-full w-full min-h-[300px] md:min-h-0">
          <div
            className="relative w-full h-full aspect-square md:aspect-auto"
            style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
          >
            <Image
              src="https://awshad.com/wp-content/uploads/2024/08/hemp-7212781_1280.jpg"
              alt="Hemp plant close-up"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
