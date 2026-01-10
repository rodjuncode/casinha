# Image Assets Folder

Place your images here:

- `logo.svg` - Your company logo (currently using placeholder)
- `hero-image.jpg` - Main hero section image (recommended size: 800x600px)
- `profile.jpg` - About section profile/company image (recommended size: 600x600px)
- `stars.svg` - 5-star rating graphic (currently using placeholder)
- `og-image.jpg` - Social media preview image (recommended size: 1200x630px)

## Image Guidelines

- **Format**: Use WebP for photos (with JPG fallback), SVG for logos/icons
- **Optimization**: Compress images before uploading (use tools like TinyPNG or Squoosh)
- **Dimensions**: Follow recommended sizes above for best results
- **Naming**: Use lowercase, hyphenated names (e.g., `hero-image.jpg`)

## Quick Image Optimization

```bash
# If you have imagemagick installed (optional)
magick convert input.jpg -quality 85 -resize 800x600 output.jpg
```

Replace the placeholder images with your actual brand assets when ready!
