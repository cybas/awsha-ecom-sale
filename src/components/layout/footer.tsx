import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from '../ui/button';

const footerLinks = {
  explore: [
    { href: 'https://awshad.com/shop-now/', label: 'Shop' },
    { href: 'https://awshad.com/track-my-order/', label: 'Track my Order' },
    { href: 'https://awshad.com/our-story/', label: 'Our Story' },
    { href: 'https://awshad.com/explore-awshad/', label: 'Explore Awshad' },
    { href: 'https://awshad.com/contact-us/', label: 'Contact Us' },
    { href: 'https://awshad.com/privacy-policy/', label: 'Privacy Policy' },
    { href: 'https://awshad.com/refund-policy/', label: 'Refund Policy' },
    { href: 'https://awshad.com/terms-of-service/', label: 'Terms of Service' },
    { href: 'https://awshad.com/shipment-policy/', label: 'Shipment Policy' },
    { href: 'https://awshad.com/cbd-oil-mumbai/', label: 'CBD Oil Mumbai' },
  ],
  support: [
    { href: 'https://awshad.com/contact-us/', label: 'Contact Us' },
    { href: 'https://awshad.com/shipping-and-return-policy/', label: 'Shipping & Returns' },
    { href: 'https://awshad.com/privacy-policy/', label: 'Privacy Policy' },
    { href: 'https://awshad.com/terms-and-conditions/', label: 'Terms of Service' },
  ],
};

const socialLinks = [
    { href: 'https://www.instagram.com/awshad/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/awshadwellness', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com/awshadwellness', icon: Twitter, label: 'Twitter' },
    { href: 'https://www.youtube.com/channel/UCfA5hI3M_gI5_B5b7qg_t-g', icon: Youtube, label: 'Youtube' },
];

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
             <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/brand/awshad-logo.png"
                  alt="Awshad logo"
                  width={120}
                  height={32}
                  priority
                />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Premium cannabis wellness products for a balanced life.
            </p>
             <div className="mt-4 flex space-x-1">
                {socialLinks.map(social => (
                    <Button key={social.href} variant="ghost" size="icon" asChild>
                        <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon className="h-5 w-5" />
                        </Link>
                    </Button>
                ))}
            </div>
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-3 grid grid-cols-1 sm:grid-cols-2">
              {footerLinks.explore.map(link => (
                <li key={link.href}><Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map(link => (
                <li key={link.href}><Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground space-y-4">
             <p>
                Licensed Under the Government of India’s AYUSH Ministry. Licence Number: MP25E/21/898
            </p>
            <p>
              Casaps Trading Pvt Ltd is associated with Awshad.com. &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
