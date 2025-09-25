'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = {
  shop: [
    { title: "Oral Tinctures", href: "https://awshad.com/product-category/oral-tinctures/" },
    { title: "CBD + THC Oils", href: "https://awshad.com/product-category/cbd-oil/" },
    { title: "Capsules", href: "https://awshad.com/product-category/cbd-capsules/" },
    { title: "Topicals", href: "https://awshad.com/product-category/cbd-topicals/" },
    { title: "Mushroom Supplements", href: "https://awshad.com/product-category/mushroom-supplements/" },
    { title: "Pet Products", href: "https://awshad.com/product-category/pet-products/" },
    { title: "Strong CBD Products", href: "https://awshad.com/product-category/strong-cbd-products/" },
    { title: "Gummies", href: "https://awshad.com/product-category/cbd-gummies/" },
    { title: "Super Saver Combos", href: "https://awshad.com/product-category/super-saver-combos/" },
  ],
  doctors: [
    { title: "Online Consultation", href: "https://awshad.com/doctors/online-consultation/" },
    { title: "In-person Consultation", href: "https://awshad.com/doctors/in-person-consultation/" },
  ],
  explore: [
    { title: "Our Story", href: "https://awshad.com/our-story/" },
    { title: "Media Features", href: "https://awshad.com/media-features/" },
    { title: "Blog", href: "https://awshad.com/blog/" },
    { title: "FAQ", href: "https://awshad.com/faqs/" },
    { title: "Lab Report", href: "/learn/lab-reports" },
  ],
  contact: [
     { title: "Contact Us", href: "https://awshad.com/contact-us/" },
     { title: "Track My Order", href: "https://awshad.com/track-my-order/" },
  ],
}

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2" aria-label="Awshad home">
            <Image
              src="/brand/awshad-logo.png"
              alt="Awshad logo"
              width={110}
              height={28}
              className="h-7 w-auto md:h-8"
              priority
            />
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
             <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navLinks.shop.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>Doctors</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4">
                  {navLinks.doctors.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>Explore Awshad</NavigationMenuTrigger>
              <NavigationMenuContent>
                 <ul className="grid w-[300px] gap-3 p-4">
                  {navLinks.explore.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                 <ul className="grid w-[300px] gap-3 p-4">
                  {navLinks.contact.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
            <SheetContent side="right" className="w-full max-w-sm">
               <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-8">
                   <Image
                      src="/brand/awshad-logo.png"
                      alt="Awshad logo"
                      width={120}
                      height={32}
                    />
                </Link>
              <Accordion type="single" collapsible className="w-full">
                <div className="py-2">
                  <Link href="/" className="text-lg font-medium hover:underline">Home</Link>
                </div>
                 <AccordionItem value="shop">
                  <AccordionTrigger className="text-lg font-medium">Shop</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4 pt-2">
                    {navLinks.shop.map(item => (
                       <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">{item.title}</Link>
                    ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="doctors">
                  <AccordionTrigger className="text-lg font-medium">Doctors</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4 pt-2">
                    {navLinks.doctors.map(item => (
                       <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">{item.title}</Link>
                    ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="explore">
                  <AccordionTrigger className="text-lg font-medium">Explore Awshad</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4 pt-2">
                    {navLinks.explore.map(item => (
                       <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">{item.title}</Link>
                    ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="contact">
                  <AccordionTrigger className="text-lg font-medium">Contact Us</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3 pl-4 pt-2">
                    {navLinks.contact.map(item => (
                       <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">{item.title}</Link>
                    ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default Header;
