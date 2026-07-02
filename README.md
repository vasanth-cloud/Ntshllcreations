# NtShellcreations Website

A modern React + Vite + Tailwind CSS website for **NtShellcreations**: a personal brand, digital product shop, services portfolio, and contact hub.

## Features

- Responsive SaaS-style landing page
- Products with WhatsApp purchase flow
- Services portfolio with WhatsApp enquiry buttons
- Project portfolio page
- About and contact pages
- Reusable components and editable data files
- No backend required

## Tech Stack

- React + Vite
- Tailwind CSS
- React Router
- Lucide React icons

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Edit Contact Details

Update WhatsApp number, email, LinkedIn, and other brand links in:

```text
src/data/site.js
```

The WhatsApp number should include country code without `+`, for example:

```js
whatsappNumber: '919876543210'
```

## Add More Products, Services, or Projects

Edit these files:

```text
src/data/products.js
src/data/services.js
src/data/projects.js
```
