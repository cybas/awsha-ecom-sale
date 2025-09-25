'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NAV_SALE, AW } from '@/lib/constants';

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
            {NAV_SALE.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.label} className="nav-item">
                    <Link href={item.href}>Home</Link>
                  </li>
                );
              }
              return (
                <li key={item.label} className="nav-item has-sub">
                  <button className="nav-trigger" aria-expanded="false">{item.label}</button>
                  <div className="nav-menu">
                    {item.children.map(child => (
                      <Link 
                        key={child.label} 
                        href={child.href} 
                        target={child.external ? "_blank" : "_self"} 
                        rel={child.external ? "noopener noreferrer" : ""}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="header-right">
            <Link href={`${AW}/cart/`} aria-label="Cart" className="cart-btn" rel="noopener noreferrer">
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
                      {NAV_SALE.map(item => {
                        if (!item.children) {
                          return (
                            <div key={item.label} className="py-2 border-b">
                              <Link href={item.href} className="text-lg font-medium hover:underline" onClick={() => setOpenSheet(false)}>{item.label}</Link>
                            </div>
                          )
                        }
                        return (
                          <AccordionItem key={item.label} value={item.label.toLowerCase()}>
                            <AccordionTrigger className="text-lg font-medium">{item.label}</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col space-y-3 pl-4 pt-2">
                                {item.children.map(child => (
                                    <Link 
                                      key={child.label} 
                                      href={child.href}
                                      target={child.external ? "_blank" : "_self"} 
                                      rel={child.external ? "noopener noreferrer" : ""}
                                      className="text-muted-foreground hover:text-foreground"
                                      onClick={() => setOpenSheet(false)}
                                    >
                                      {child.label}
                                    </Link>
                                ))}
                                </div>
                            </AccordionContent>
                          </AccordionItem>
                        )
                      })}
                    </Accordion>
                </SheetContent>
            </Sheet>
        </div>

      </div>
    </header>
  );
}

export default Header;
