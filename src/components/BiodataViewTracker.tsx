'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

interface BiodataViewTrackerProps {
  biodataCode: string;
  biodataName: string;
  biodataType: string;
  pageUrl: string;
}

export default function BiodataViewTracker({ biodataCode, biodataName, biodataType, pageUrl }: BiodataViewTrackerProps) {
  useEffect(() => {
    // Track ViewContent event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: `Biodata - ${biodataName} (${biodataType})`,
        content_ids: [biodataCode],
        content_category: 'biodata',
        content_type: 'product',
        page_url: pageUrl,
      });
    }
  }, [biodataCode, biodataName, biodataType, pageUrl]);

  return null;
}