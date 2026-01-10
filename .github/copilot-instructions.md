# Copilot Instructions for Casinha

## Project Overview
Static single-page responsive website designed in Figma, implemented with vanilla HTML/CSS/JavaScript, and hosted on GitHub Pages.

## Tech Stack & Constraints
- **HTML5** - Semantic markup, accessibility-focused
- **CSS3** - Custom styles, no frameworks (responsive design required)
- **Vanilla JavaScript** - No frameworks or libraries unless explicitly specified
- **SVG** - For icons and vector graphics
- **No server-side code** - Pure static site, no API calls or backend
- **Hosting** - GitHub Pages

## Development Workflow

### Local Development
```bash
# Serve locally with Python (if needed)
python -m http.server 8000

# Or use VS Code Live Server extension
```

### Deployment
```bash
# Commit and push to main branch
git add .
git commit -m "Update site"
git push origin main
# GitHub Pages will auto-deploy from main branch
```

## Code Conventions

### File Organization
- `index.html` - Main HTML file
- `styles/` or `css/` - Stylesheets
- `scripts/` or `js/` - JavaScript files
- `assets/` or `images/` - Images, SVGs, and other media
- Keep structure flat and simple for a single-page site

### CSS Patterns
- Use CSS custom properties (variables) for colors, spacing, and breakpoints
- Mobile-first responsive design with media queries
- Avoid inline styles - keep CSS in separate files

### JavaScript Patterns
- Use modern ES6+ syntax
- Keep scripts modular and well-commented
- Event listeners for interactivity (smooth scrolling, animations, etc.)

### Responsive Design
- Design mobile-first, then scale up
- Use flexbox/grid for layouts
- Test breakpoints: mobile (< 768px), tablet (768px - 1024px), desktop (> 1024px)

## Implementation Guidelines
- Match Figma design specifications exactly (colors, spacing, typography, layouts)
- Prioritize semantic HTML for SEO and accessibility
- Optimize images and SVGs for web performance
- Ensure cross-browser compatibility
- Add meta tags for social sharing (Open Graph, Twitter Cards)

## GitHub Pages Setup
- Repository settings → Pages → Source: Deploy from branch (main)
- Site will be available at: `https://<username>.github.io/casinha/`
- No build process needed - static files served directly

---
*When implementing from Figma designs, ask for specific measurements, colors (hex codes), fonts, and spacing if not provided.*
