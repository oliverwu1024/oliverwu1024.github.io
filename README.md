# Oliver Wu - Personal Website

A modern, responsive personal portfolio website built with React and Vite.

## Features

- Multi-page navigation (Home, About, Projects, Contact)
- Responsive design
- Modern UI with smooth animations
- GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/oliverwu1024/oliverwu1024.github.io.git
cd oliverwu1024.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Build and prepare for deployment

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select:
   - Source: "GitHub Actions"
4. Push to the main branch to trigger automatic deployment

The site will be available at: `https://oliverwu1024.github.io/oliverwu1024.github.io/`

## Customization

### Update Personal Information

- Edit [src/pages/Home.jsx](src/pages/Home.jsx) to update your introduction
- Edit [src/pages/About.jsx](src/pages/About.jsx) to add your background, skills, and interests
- Edit [src/pages/Projects.jsx](src/pages/Projects.jsx) to showcase your projects
- Edit [src/pages/Contact.jsx](src/pages/Contact.jsx) to update your contact links

### Styling

All CSS files are located in their respective component/page directories:
- Global styles: [src/index.css](src/index.css)
- App layout: [src/App.css](src/App.css)
- Component styles: `src/components/*.css`
- Page styles: `src/pages/*.css`

## Technologies Used

- React 19
- Vite 7
- React Router 7
- CSS3

## License

ISC
