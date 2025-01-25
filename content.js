// List of common ad elements and CSS selectors to hide
const adSelectors = [
    'iframe[src*="ads"]', // Match iframes containing "ads" in their src attribute
    'div[id*="ad"]',       // Match divs with "ad" in their ID
    'div[class*="ad"]',     // Match divs with "ad" in their class
    'img[src*="ads"]',      // Match images with "ads" in their src
    'div[class*="banner"]', // Match banners
    '.ad',                  // Match elements with the "ad" class
    '.advertisement',       // Match elements with the "advertisement" class
  ];
  
  // Hide ad elements by applying display:none
  adSelectors.forEach(selector => {
    const ads = document.querySelectorAll(selector);
    ads.forEach(ad => ad.style.display = 'none');
  });
  
  console.log('Ad blocker content script executed');