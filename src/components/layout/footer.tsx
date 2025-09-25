import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from '../ui/button';
import { FOOTER_LINKS_SALE } from '@/lib/constants';

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
                  src="https://awshad.com/wp-content/uploads/2019/06/Awshad_LogoName_Black.png"
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
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-3 grid grid-cols-1 sm:grid-cols-2">
              {FOOTER_LINKS_SALE.map(link => (
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
