'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track PageView on route change
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView', {
        page_path: pathname,
        page_url: window.location.href,
      });
    }

    // Add click tracking to all buttons and links
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const element = target.closest('button, a, [role="button"]') as HTMLElement;
      
      if (!element || !window.fbq) return;

      const text = element.textContent?.trim() || '';
      const href = (element as HTMLAnchorElement).href || '';
      const id = element.id || '';

      // WhatsApp button - check href OR text
      if (href.includes('wa.me') || text.includes('WhatsApp') || text.includes('মেসেজ পাঠান')) {
        window.fbq('track', 'Contact', { 
          event: 'Contact',
          button_text: text.substring(0, 50), 
          button_id: id,
          page_path: pathname,
        });
        console.log('FB Pixel: Contact - WhatsApp', { text, href });
      }
      // Register button
      else if (text.includes('রেজিস্টার') || text.includes('Register') || href.includes('/register')) {
        window.fbq('track', 'Lead', { 
          event: 'Lead',
          button_text: text.substring(0, 50), 
          button_id: id,
          page_path: pathname,
        });
        console.log('FB Pixel: Lead - Register', { text, href });
      }
      // Login button
      else if (text.includes('লগইন') || text.includes('Login') || href.includes('/login')) {
        window.fbq('track', 'Lead', { 
          event: 'Lead',
          button_text: text.substring(0, 50), 
          button_id: id,
          page_path: pathname,
        });
        console.log('FB Pixel: Lead - Login', { text, href });
      }
      // Search button
      else if (text.includes('খুঁজুন') || text.includes('Search') || text.includes('🔍')) {
        window.fbq('track', 'Search', { 
          event: 'Search',
          button_text: text.substring(0, 50), 
          button_id: id,
          page_path: pathname,
        });
        console.log('FB Pixel: Search', { text });
      }
      // Shortlist button
      else if (text.includes('শর্টলিস্ট') || text.includes('Shortlist')) {
        window.fbq('track', 'ViewContent', { 
          event: 'ViewContent',
          button_text: 'Shortlist Biodata',
          content_category: 'biodata_action',
          page_path: pathname,
        });
        console.log('FB Pixel: ViewContent - Shortlist', { text });
      }
      // Copy button
      else if (text.includes('কপি') || text.includes('Copy')) {
        window.fbq('track', 'ViewContent', { 
          event: 'ViewContent',
          button_text: 'Copy Biodata Link',
          content_category: 'biodata',
          page_path: pathname,
        });
        console.log('FB Pixel: ViewContent - Copy', { text });
      }
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, [pathname]);

  return null;
}