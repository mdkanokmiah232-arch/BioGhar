'use client';

import { useEffect } from 'react';
import { fbPixel } from '@/lib/fbPixel';

interface BiodataTrackerProps {
  biodataCode: string;
  biodataName: string;
  biodataType: string;
}

export default function BiodataTracker({ biodataCode, biodataName, biodataType }: BiodataTrackerProps) {
  useEffect(() => {
    // Track ViewContent when biodata page loads
    fbPixel.track('ViewContent', {
      content_name: `Biodata - ${biodataName} (${biodataType})`,
      content_ids: [biodataCode],
      content_category: 'biodata',
      content_type: 'product',
    });
  }, [biodataCode, biodataName, biodataType]);

  return null;
}
