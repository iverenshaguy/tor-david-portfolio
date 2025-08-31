# SVG Icon Components

This directory contains reusable SVG icon components that can be customized with props.

## Usage

```tsx
import { 
  Arrow1Svg, 
  StarSvg, 
  WhatsappIconSvg,
  Whiskers1Svg,
  Whiskers2Svg,
  LoopsSvg,
  LoveSvg,
  BlobsSvg,
  GoogleIconSvg,
  Line1Svg,
  Line2Svg,
  Arrow2Svg,
  Blob1Svg,
  Blob2Svg,
  Blob3Svg,
  GlobeSvg,
  NextSvg,
  VercelSvg,
  WindowSvg,
  FileSvg,
  LinkedinIconSvg,
  ArrowRightSvg
} from '@/app/components/icons';

// Basic usage with default props
<Arrow1Svg />
<StarSvg />
<WhatsappIconSvg />

// Customized usage
<Arrow1Svg 
  width={200} 
  height={120} 
  color="#FF0000" 
  strokeWidth={2} 
  className="my-custom-class" 
/>

<StarSvg 
  width={100} 
  height={80} 
  color="#FFD700" 
  strokeWidth={3} 
  className="star-icon" 
/>
```

## Available Components

### Arrows
- `Arrow1Svg` - Curved arrow with stroke
- `Arrow2Svg` - Complex curved arrow design
- `ArrowRightSvg` - Simple arrow right icon

### Shapes & Decorative
- `StarSvg` - Star shape with stroke
- `LoveSvg` - Heart shape with stroke
- `BlobsSvg` - Multiple blob shapes
- `Blob1Svg` - Large blob shape
- `Blob2Svg` - Medium blob shape
- `Blob3Svg` - Small blob shape
- `Whiskers1Svg` - Cat whiskers design 1
- `Whiskers2Svg` - Cat whiskers design 2
- `LoopsSvg` - Looping line design

### Lines
- `Line1Svg` - Curved line
- `Line2Svg` - Complex curved line

### Icons
- `WhatsappIconSvg` - WhatsApp logo
- `GoogleIconSvg` - Google logo
- `LinkedinIconSvg` - LinkedIn logo
- `GlobeSvg` - Globe icon
- `NextSvg` - Next.js logo
- `VercelSvg` - Vercel logo
- `WindowSvg` - Window icon
- `FileSvg` - File icon

## Props

### For Stroke-based SVGs (Arrows, Stars, Lines, etc.):
- `width?: number` - Width of the SVG
- `height?: number` - Height of the SVG
- `color?: string` - Stroke color
- `strokeWidth?: number` - Stroke width
- `className?: string` - Additional CSS classes

### For Fill-based SVGs (Icons, Blobs, etc.):
- `width?: number` - Width of the SVG
- `height?: number` - Height of the SVG
- `color?: string` - Fill color
- `className?: string` - Additional CSS classes

## Default Values

Each component uses the original SVG's dimensions and colors as defaults:

- **Arrows**: `#5A4B8E` color, `4` stroke width
- **Stars**: `#5A4B8E` color, `4` stroke width
- **Lines**: `#5A4B8E` or `#4F4F4F` color, `4` stroke width
- **Blobs**: `#5A4B8E` fill color
- **Icons**: `black` or `#666` fill color
- **Whiskers**: `black` stroke color, `4` stroke width

## Benefits of SVG Components vs Next.js Image

### SVG Components (Recommended for icons):
- ✅ Fully customizable (color, size, stroke width)
- ✅ Better performance (no HTTP requests)
- ✅ Smaller bundle size for simple icons
- ✅ Can be styled with CSS
- ✅ Perfect for icons and simple graphics

### Next.js Image (Better for complex graphics):
- ✅ Better for complex graphics and photos
- ✅ Automatic optimization and lazy loading
- ✅ Better caching
- ✅ Responsive image handling 