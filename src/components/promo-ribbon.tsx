'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const PromoRibbon = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'w-full bg-[hsl(var(--cream-hsl))] text-foreground text-sm text-center py-2 transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      ✨ Use code DIWALI20 for extra 10% off. Ends soon.
    </div>
  );
};

export default PromoRibbon;
