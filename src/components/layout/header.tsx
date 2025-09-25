import Link from 'next/link';
import { Leaf, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const navItems = [
    { href: 'https://awshad.com/shop-now', label: 'Shop' },
    { href: 'https://awshad.com/our-story', label: 'About' },
    { href: 'https://awshad.com/learn', label: 'Learn' },
    { href: 'https://awshad.com/contact-us', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-primary">Awshad</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank" rel="noopener noreferrer"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://awshad.com/cart" target="_blank" rel="noopener noreferrer" aria-label="View Cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                0
              </span>
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-12">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Leaf className="h-6 w-6 text-primary" />
                  <span className="text-primary">Awshad</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank" rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="https://awshad.com/checkout/"
                  target="_blank" rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Checkout
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
