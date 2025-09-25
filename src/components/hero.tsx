import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Diwali Sale
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
          Illuminate your wellness this festive season. Discover exclusive offers on our premium products.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="#products">Shop The Sale</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
