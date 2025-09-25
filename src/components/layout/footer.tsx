import Link from 'next/link';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
             <Link href="/" className="flex items-center space-x-2">
                <Leaf className="h-7 w-7 text-primary" />
                <span className="font-bold text-xl text-primary">Awshad</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium cannabis wellness products for a balanced life.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Shop</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Oils</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Capsules</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Topicals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Our Story</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <p className="mt-4 text-sm text-muted-foreground">Stay connected.</p>
            {/* Social media icons can be added here */}
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
