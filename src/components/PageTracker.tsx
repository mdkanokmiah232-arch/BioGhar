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

      const text = element.textContent?.trim().substring(0, 50) || '';
      const href = (element as HTMLAnchorElement).href || '';
      const id = element.id || '';

      // Determine event type
      if (text.includes('রেজিস্টার') || text.includes('Register')) {
        window.fbq('track', 'Lead', { button_text: text, button_id: id });
      } else if (text.includes('লগইন') || text.includes('Login')) {
        window.fbq('track', 'Lead', { button_text: text, button_id: id });
      } else if (text.includes('শর্টলিস্ট') || text.includes('Shortlist')) {
        window.fbq('track', 'ViewContent', { button_text: text, content_category: 'biodata_action' });
      } else if (text.includes('খুঁজুন') || text.includes('Search') || text.includes('🔍')) {
        window.fbq('track', 'Search', { button_text: text, button_id: id });
      } else if (href.includes('whatsapp') || text.includes('WhatsApp')) {
        window.fbq('track', 'Contact', { button_text: 'WhatsApp Contact', button_id: id });
      } else if (pathname.includes('/biodata/') && (text.includes('কপি') || text.includes('Copy'))) {
        window.fbq('track', 'ViewContent', { button_text: 'Copy Biodata Link', content_category: 'biodata' });
      }
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, [pathname]);

  return null;
}