'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
};


const Header = () => {
  const [openSheet, setOpenSheet] = React.useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <div className="header-left">
           <Link href="/" aria-label="Awshad home" className="logo-link">
            <Image
              src="https://awshad.com/wp-content/uploads/2019/06/Awshad_LogoName_OffWhite.png"
              alt="Awshad logo"
              width={110}
              height={28}
              priority
            />
          </Link>
        </div>

        <nav className="main-nav" aria-label="Primary">
          <ul className="nav-list">
            <li className="nav-item"><Link href="/">Home</Link></li>

            <li className="nav-item has-sub">
              <button className="nav-trigger" aria-expanded="false">Shop</button>
              <div className="nav-menu">
                {navLinks.shop.map(link => (
                    <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</Link>
                ))}
              </div>
            </li>

            <li className="nav-item has-sub">
              <button className="nav-trigger" aria-expanded="false">Doctors</button>
              <div className="nav-menu">
                 {navLinks.doctors.map(link => (
                    <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</Link>
                ))}
              </div>
            </li>

            <li className="nav-item has-sub">
              <button className="nav-trigger" aria-expanded="false">Explore Awshad</button>
              <div className="nav-menu">
                 {navLinks.explore.map(link => (
                    <Link key={link.href} href={link.href} target={link.href.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer">{link.title}</Link>
                ))}
              </div>
            </li>

            <li className="nav-item has-sub">
              <button className="nav-trigger" aria-expanded="false">Contact Us</button>
              <div className="nav-menu">
                <Link href="https://awshad.com/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</Link>
                <Link href="https://awshad.com/track-my-order/" target="_blank" rel="noopener noreferrer">Track My Order</Link>
              </div>
            </li>
          </ul>
        </nav>
        
        <div className="header-right">
            <Link href="https://awshad.com/cart" aria-label="Cart" className="cart-btn" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-5 w-5" />
                <span className="count">0</span>
            </Link>

            <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="mobile-menu-trigger">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm">
                    <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-8" onClick={() => setOpenSheet(false)}>
                        <Image
                            src="https://awshad.com/wp-content/uploads/2019/06/Awshad_LogoName_Black.png"
                            alt="Awshad logo"
                            width={120}
                            height={32}
                        />
                    </Link>
                    <Accordion type="single" collapsible className="w-full">
                        <div className="py-2">
                        <Link href="/" className="text-lg font-medium hover:underline" onClick={() => setOpenSheet(false)}>Home</Link>
                        </div>
                        <AccordionItem value="shop">
                        <AccordionTrigger className="text-lg font-medium">Shop</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col space-y-3 pl-4 pt-2">
                            {navLinks.shop.map(item => (
                                <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" onClick={() => setOpenSheet(false)}>{item.title}</Link>
                            ))}
                            </div>
                        </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="doctors">
                        <AccordionTrigger className="text-lg font-medium">Doctors</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col space-y-3 pl-4 pt-2">
                            {navLinks.doctors.map(item => (
                                <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" onClick={() => setOpenSheet(false)}>{item.title}</Link>
                            ))}
                            </div>
                        </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="explore">
                        <AccordionTrigger className="text-lg font-medium">Explore Awshad</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col space-y-3 pl-4 pt-2">
                            {navLinks.explore.map(item => (
                                <Link key={item.title} href={item.href} target={item.href.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" onClick={() => setOpenSheet(false)}>{item.title}</Link>
                            ))}
                            </div>
                        </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="contact">
                        <AccordionTrigger className="text-lg font-medium">Contact Us</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col space-y-3 pl-4 pt-2">
                            {navLinks.contact.map(item => (
                                <Link key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" onClick={() => setOpenSheet(false)}>{item.title}</Link>
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
}

export default Header;
