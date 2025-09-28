# Ian Donahue - Portfolio Website

A modern React portfolio website built with TypeScript, Vite, and React Router.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with modern CSS
- **Portfolio Showcase**: Dynamic portfolio section with project filtering
- **Blog Integration**: Blog posts with markdown-like content
- **About Section**: Professional experience and skills
- **SEO Optimized**: Meta tags and structured data
- **Fast Performance**: Optimized build with Vite

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Themify Icons
- **Fonts**: Inter, Work Sans

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ian-donahue-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   └── PortfolioSection.tsx
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Blog.tsx        # Blog page
│   ├── Tools.tsx       # Tools page
│   └── Books.tsx       # Books page
├── data/               # Data files
│   ├── siteConfig.ts   # Site configuration
│   ├── homepageData.ts # Homepage content
│   ├── portfolioData.ts # Portfolio items
│   ├── aboutData.ts    # About page content
│   └── blogData.ts     # Blog posts
├── assets/             # Static assets
│   ├── images/         # Images
│   ├── fonts/          # Font files
│   └── css/            # Stylesheets
└── main.tsx           # Application entry point
```

## 🎨 Customization

### Adding New Portfolio Items

Edit `src/data/portfolioData.ts`:

```typescript
export const portfolioData: PortfolioItem[] = [
  {
    title: "Your Project Title",
    image: "/images/portfolio/your-project.jpg",
    projectUrl: "https://your-project.com",
    categories: ["design", "development"]
  },
  // ... more items
];
```

### Adding New Blog Posts

Edit `src/data/blogData.ts`:

```typescript
export const blogData: BlogPost[] = [
  {
    title: "Your Blog Post",
    date: "2024-01-15T10:00:00+00:00",
    description: "Post description",
    draft: false,
    slug: "your-blog-post",
    content: "Your blog content..."
  },
  // ... more posts
];
```

### Updating Site Configuration

Edit `src/data/siteConfig.ts` to update:
- Site title and description
- Social media links
- Navigation menu
- Contact information

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing in `public/_redirects`:

```
/*    /index.html   200
```

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Build and deploy: `npm run build && npm run deploy`

## 📝 Content Management

The website uses TypeScript data files for content management. This approach provides:

- **Type Safety**: TypeScript ensures data consistency
- **Version Control**: All content is tracked in Git
- **Developer Friendly**: Easy to edit and maintain
- **Performance**: No database queries needed

For more complex content management, consider integrating with:
- Headless CMS (Strapi, Contentful, Sanity)
- Markdown files with frontmatter
- JSON API endpoints

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

Ian Donahue - [donahue.ian@gmail.com](mailto:donahue.ian@gmail.com)

Project Link: [https://github.com/iandonahue/ian-donahue-portfolio](https://github.com/iandonahue/ian-donahue-portfolio)