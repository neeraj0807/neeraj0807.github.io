# Neeraj Agrawal Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **Sections**:
  - Hero section with introduction
  - About me with bio and tech stack
  - Skills showcase
  - Work experience timeline
  - Education history
  - Featured projects with image galleries
  - Contact form
  - Footer with social links

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS animations with Tailwind utilities

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero/intro section
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills section
│   ├── Experience.tsx      # Work experience section
│   ├── Education.tsx       # Education section
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact form section
│   └── Footer.tsx          # Footer with social links
└── data/
    └── portfolio.ts        # Portfolio content and data
```

## Customization

### Update Your Information

Edit `src/data/portfolio.ts` to update:
- Your name, title, and bio
- Skills and tech stack
- Work experience
- Education
- Projects
- Contact information
- Social links

### Modify Colors

Colors can be customized in `tailwind.config.js` under the `theme.extend.colors` section.

## Deployment

The portfolio can be deployed to various platforms:

- **Vercel** (Recommended): Push to GitHub and connect to Vercel
- **Netlify**: Deploy from Git or use CLI
- **GitHub Pages**: Use `next export` and GitHub Actions

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact through the portfolio contact form or via email.
