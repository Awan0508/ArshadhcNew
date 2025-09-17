export const pageview = (url) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'page_view',
      page_location: window.location.href,
      page_title: document.title,
      page_path: url
    });
  }
};