# Balaji Automobiles

A responsive website for Balaji Automobiles, a Toyota-focused workshop that also services other major car and motorcycle brands. Visitors can explore services, learn about the workshop, and request bookings or contact the team through WhatsApp.

**Live website:** [balajiautomobiles.vercel.app](https://balajiautomobiles.vercel.app/)

## Features

- Home, services, about, booking, and contact pages
- Responsive layout with mobile call and WhatsApp actions
- Booking and contact forms that prepare a message to send through WhatsApp
- Shared business details and service information managed in source configuration
- Client-side routing with a not-found page

## Tech stack

- React 19 and TypeScript
- Vite
- React Router
- Tailwind CSS 4
- Lucide React icons

## Getting started

Install a current Node.js version and npm, then run:

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project structure

```text
src/
  components/  Shared layout, form, home, service, and UI components
  config/      Business contact details and navigation
  data/        Service and media data
  lib/         Utility, validation, and WhatsApp helpers
  pages/       Route-level page components
public/        Static assets
```

## Business configuration

Update the workshop details in `src/config/business.ts`, including the phone and WhatsApp numbers, address, supported brands, and opening hours. Keep the phone's `display`, `tel`, and `digits` values in sync. The hours are explicitly marked as placeholders and should be confirmed before publishing.

Service content is maintained in `src/data/services.ts`.

The forms do not submit to a backend: they validate the entered details and open WhatsApp with a prefilled message. Make sure the configured WhatsApp number is correct and can receive enquiries.

## Deployment

Build the site with `npm run build` and deploy the generated `dist/` directory to a static hosting provider. The included `vercel.json` rewrites requests to `index.html` so client-side routes work when hosted on Vercel.
