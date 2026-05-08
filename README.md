# My Portfolio

A modern personal portfolio website built with React and Vite. This project highlights professional experience, technical skills, featured projects, education, certifications, and contact details in a sleek, responsive layout.

## Features

- Responsive, mobile-friendly portfolio layout
- Hero section with introduction and call-to-action
- About section with personal summary and key highlights
- Skills cards with animated proficiency indicators
- Featured projects gallery with live links and GitHub links
- Education & certifications section with timeline layout
- Contact section with easy access to social and email links
- Smooth scrolling navigation and polished hover interactions

## Tech Stack

- React
- Vite
- CSS
- ESLint

## Project Structure

- `src/App.jsx` — main application layout
- `src/components/` — reusable UI sections
  - `Navbar.jsx`
  - `HeroSection.jsx`
  - `About.jsx`
  - `Skills.jsx`
  - `Projects.jsx`
  - `Education.jsx`
  - `Contact.jsx`
  - `Footer.jsx`
- `src/styles/` — section-specific CSS styles
- `src/assets/` — images and icons used in the portfolio

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the local development URL shown in the terminal to preview the site.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Customization

To personalize the portfolio, update the relevant component content and styling:

- `src/components/HeroSection.jsx` — hero greeting and introduction
- `src/components/About.jsx` — personal summary and experience details
- `src/components/Skills.jsx` — skill items and proficiency values
- `src/components/Projects.jsx` — project cards, descriptions, and links
- `src/components/Education.jsx` — education timeline and certifications
- `src/components/Contact.jsx` — contact methods and social links

## Notes

- Ensure the image assets in `src/assets/` are correctly referenced in the components.
- You can replace the default `package.json` metadata with your own project name and version.

## License

This repository is open for customization. Replace this section with your chosen license if needed.
