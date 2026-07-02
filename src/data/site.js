export const siteConfig = {
  brandName: 'NtShellcreations',
  tagline: 'Digital Products, AI Solutions & Creative Tech Services',
  // Change this WhatsApp number later. Use country code without +.
  whatsappNumber: '918248161233',
  // Change this email and LinkedIn URL when your real contact links are ready.
  email: 'avasanth081@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/a-vasanth/',
};

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
