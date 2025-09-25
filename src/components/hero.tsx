import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full bg-background text-foreground" style={{minHeight: "min(60vh, 700px)"}}>
      <div className="container h-full flex items-center">
        <div className="flex-1 text-left py-12 md:py-20 max-w-2xl">
           <Badge variant="secondary" className="mb-4">Diwali Sale • Limited Time</Badge>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Light up your wellness this Diwali
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Up to 20% off on best-sellers. Free, discreet shipping. Pay securely at checkout.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#sale-grid">Shop the Sale</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/learn/lab-reports">See Lab Reports</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 hidden lg:block relative h-full">
           <div 
             className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10"
             style={{
               backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23FDE68A' /%3E%3Cstop offset='100%25' stop-color='transparent' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='200' cy='200' r='200' fill='url(%23g)'/%3E%3C/svg%3E\")"
             }}
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;
