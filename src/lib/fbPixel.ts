'use client';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Facebook Pixel Helper Functions
export const fbPixel = {
  // Track PageView (automatically called in layout)
  pageView: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  },

  // Track ViewContent - for biodata page views
  viewContent: (contentName: string, contentIds: string[]) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: contentName,
        content_ids: contentIds,
        content_type: 'product',
      });
    }
  },

  // Track Search - for biodata search
  search: (searchString: string) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Search', {
        search_string: searchString,
      });
    }
  },

  // Track Lead - for registration
  lead: (contentName: string = 'Biodata Registration') => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: contentName,
        content_category: 'Registration',
      });
    }
  },

  // Track Contact - for contact form submissions
  contact: (contentName: string = 'Contact Form') => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: contentName,
      });
    }
  },

  // Track CompleteRegistration
  completeRegistration: (registrationMethod: string = 'Website') => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'CompleteRegistration', {
        registration_method: registrationMethod,
      });
    }
  },

  // Track custom events
  track: (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params);
    }
  },

  // Track with custom audience pixel
  trackCustom: (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, params);
    }
  },
};

export default fbPixel;
