import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from '../ui/button';

const footerLinks = {
  shop: [
    { href: 'https://awshad.com/shop-now', label: 'All Products' },
    { href: 'https://awshad.com/product-category/cbd-oil/', label: 'Oils' },
    { href: 'https://awshad.com/product-category/cbd-capsules/', label: 'Capsules' },
    { href: 'https://awshad.com/product-category/cbd-topicals/', label: 'Topicals' },
  ],
  company: [
    { href: 'https://awshad.com/our-story/', label: 'Our Story' },
    { href: 'https://awshad.com/blog/', label: 'Blog' },
    { href: 'https://awshad.com/faqs/', label: 'FAQs' },
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
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
             <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/brand/awshad-logo.png"
                  alt="Awshad logo"
                  width={120}
                  height={32}
                />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium cannabis wellness products for a balanced life.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Shop</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.href}><Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map(link => (
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
           <div>
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="mt-4 flex space-x-2">
                {socialLinks.map(social => (
                    <Button key={social.href} variant="ghost" size="icon" asChild>
                        <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            <social.icon className="h-5 w-5" />
                        </Link>
                    </Button>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Awshad. All Rights Reserved.</p>
            <div className="order-1 sm:order-2">
                {/* Payment icons can be added here */}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
