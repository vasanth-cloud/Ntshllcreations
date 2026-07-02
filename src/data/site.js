export const siteConfig = {
  brandName: 'NtShellcreations',
  tagline: 'Digital Products, AI Solutions & Creative Tech Services',
  // Change this WhatsApp number later. Use country code without +, for example: 919876543210.
  whatsappNumber: '91YOURNUMBER',
  // Change these placeholders when your real contact links are ready.
  email: 'hello@ntshellcreations.com',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile',
  githubUrl: 'https://github.com/vasanth-cloud',
};

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
