# Simon Foster | Portfolio Website

A premium, high-performance portfolio website for **Simon Foster**, a Technical Leader and Full-Stack Engineer. Built with a modern, minimalist aesthetic and optimised for speed and responsiveness.

## 🚀 Features

- **Responsive Design**: Fluid layout that adapts seamlessly to desktop, tablet, and mobile devices.
- **Accessibility (A11y)**: WCAG AA compliant with full ARIA landmark support, "Skip to Content" links, and high-contrast `:focus-visible` states.
- **Micro-Animations**: Sophisticated CSS-native staggered reveal effects for a high-end, synchronous user experience.
- **Modern Tech Stack**: Leveraging Vite for high-performance builds and Tailwind CSS v4 for a cutting-edge CSS architecture.
- **Premium Glassmorphism**: High-fidelity design with saturated glassmorphic cards and dynamic, animated background gradients.
- **UK English Standard**: Localised throughout for regional consistency and professional clarity.
- **SEO Optimised**: Includes semantic HTML, meta descriptions, and structured data for maximum search engine visibility.

## 🛠️ Technology Stack

- **Framework**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Logic**: Vanilla JavaScript (ES Module)
- **Testing**: [Playwright](https://playwright.dev/) & [Axe-core](https://github.com/dequelabs/axe-core-playwright)
- **Animations**: CSS Transitions & JavaScript Intersection Observer API

## 📂 Project Structure

```text
├── dist/               # Production build output
├── public/             # Static assets (images, favicon, etc.)
├── src/                # Project source files (if applicable)
├── index.html          # Main entry point and site structure
├── index.css           # Global styles and Tailwind configuration
├── main.js             # Core client-side logic and animations
├── vite.config.js      # Vite configuration
└── package.json        # Project metadata and dependencies
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd simonfoster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### Production Build

Generate the production-ready assets in the `dist` folder:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 🧪 Testing

This project includes a professional-grade automated testing suite to ensure high uptime and accessibility standards.

### Running Tests

```bash
# Run all smoke and functional tests
npm run test

# Run the automated accessibility audit (WCAG AA)
npm run test:accessibility
```

### Test Coverage
- **Smoke Tests**: Verifies that hero content, experience cards, and all main sections are present.
- **Navigation**: Confirmed section-scrolling and deep-linking via URL hashes.
- **External Links**: Safety check for all social links (`rel="noopener noreferrer"`).
- **Accessibility**: Continuous automated audits for contrast, semantic roles, and landmarks.

## 📝 License

&copy; 2026 Simon Foster. All rights reserved.
