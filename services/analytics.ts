type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
};

export const trackCtaClick = (label: string, location: string, href?: string) => {
  const payload: Record<string, unknown> = {
    cta_label: label,
    cta_location: location,
  };

  if (href) {
    payload.cta_href = href;
  }

  trackEvent('cta_click', payload);
};
