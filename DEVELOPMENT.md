# Development Workflow - Adissia Luxury Website

## 🎯 Current Status
✅ **Project**: Complete ultra-premium website
✅ **Dev Server**: Running on http://localhost:5174/
✅ **Build**: Production-ready (330KB gzipped)
✅ **Deployment**: GitHub Pages configured
✅ **Documentation**: Comprehensive guides created

---

## 🚀 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting / debugging
npm run lint
```

---

## 🔧 Development Workflow

### 1. Making Changes to Components

All components are located in `/src/components/` and are React functional components with modern hooks:

```javascript
// Import patterns used throughout the project
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconName } from 'lucide-react'

// Component structure
const ComponentName = () => {
  // Hooks for state management
  const [state, setState] = useState(initialValue)

  // Effects for lifecycle events
  useEffect(() => {
    // Component logic
  }, [dependencies])

  return (
    // JSX with motion components for animations
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Component content */}
    </motion.div>
  )
}
```

### 2. Styling Guidelines

All styling uses **Tailwind CSS** with custom premium utilities:

```css
/* Available utility classes */
.btn-primary      /* Primary CTA buttons */
.btn-secondary    /* Secondary/ghost buttons */
.text-gradient    /* Brand gradient text */
.shadow-luxury    /* Premium shadow effects */
.animate-fade-in-up  /* Smooth fade animations */
```

### 3. Adding New Properties

Update the `properties` array in `Properties.jsx`:

```javascript
{
  id: 8,
  name: 'New Project Name',
  location: 'Location',
  status: 'ongoing', // 'ongoing' | 'upcoming' | 'completed'
  image: '/images/image-name.jpg',
  available: 'Count Plots',
  type: 'Plots',
  size: 'Size range',
  link: '#'
}
```

### 4. Color Customization

Brand colors are defined in `tailwind.config.js`:

```javascript
colors: {
  brand: '#274F9A',        // Primary brand blue
  'brand-dark': '#1a3a6e', // Darker variant
  gold: '#B8975A',         // Gold accents
  'gold-light': '#FFC107'  // Bright gold
}
```

### 5. Animation Patterns

Standard animation patterns used throughout:

```javascript
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <Content />
</motion.div>

// Stagger animations for lists
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 6. Responsive Design Rules

Use these breakpoints and utilities:

```html
<!-- Mobile-first approach -->
<div class="text-base md:text-lg">               <!-- Mobile: base, Desktop: lg -->
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> <!-- 1 col on mobile, 3 on large -->
<div class="p-4 md:p-6 lg:p-8">                 <!-- Responsive padding -->
<div class="flex-col md:flex-row">              <!-- Stack on mobile, row on desktop -->

<!-- Hide/show utilities -->
<div class="block md:hidden">                   <!-- Show only on mobile -->
<div class="hidden lg:block">                   <!-- Show only on large screens -->
```

### 7. Adding Images

1. Place new images in `/public/images/`
2. Use optimized formats (WebP preferred)
3. Reference as `/images/filename.ext` (no `public/` prefix)
4. Include alt text for accessibility

### 8. Font Implementation

Fonts are loaded from Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

In Tailwind config:
```javascript
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],
  'serif': ['Playfair Display', 'Georgia', 'serif']
}
```

Usage:
```html
<h1 class="font-serif font-bold text-4xl">Premium Heading</h1>
<p class="font-sans text-base">Clean body text</p>
```

### 9. Icon System

Using Lucide React icons throughout:

```javascript
import { Shield, MapPin, Award, Users, Trash } from 'lucide-react'

// In components
<Shield className="w-6 h-6 text-current" />

// Available weights: outline (default), solid
// Sizes: w-4 h-4 (16px), w-6 h-6 (24px), w-8 h-8 (32px)
```

### 10. Performance Optimization

The project includes these optimizations:

- **Code Splitting**: Automatic by Vite
- **Tree Shaking**: Unused imports removed
- **Minification**: CSS/JS compressed
- **Asset Optimization**: Images processed automatically
- **Lazy Loading**: Images load on scroll
- **Font Optimization**: Subset fonts loaded

---

## 🐛 Common Issues & Solutions

### Issue: Tailwind classes not applying
**Solution**: Check import order in `index.css` - `@tailwind base` must come before `@tailwind components`

### Issue: Images not loading
**Solution**: Store in `/public/images/` and reference as `/images/filename.ext` (not `./images/`)

### Issue: Animations not working on mobile
**Solution**: Use `viewport={{ once: true }}` and add scroll tolerance: `amount: 0.3`

### Issue: HTTPS issues on GitHub Pages
**Solution**: All asset URLs use relative paths, no protocol dependencies

### Issue: Font loading FOUT (Flash of Unstyled Text)
**Solution**: Fonts are loaded from Google Fonts with font-display: swap

---

## 📊 Key Metrics to Monitor

### Performance
- **Lighthouse Score**: Aim for 90+ on all metrics
- **Bundle Size**: Keep under 400KB gzipped
- **Load Time**: Target <3 seconds on average connections

### User Experience
- **Mobile Responsiveness**: Test all breakpoints
- **Accessibility**: Color contrast ratios ≥ 4.5:1
- **Cross-browser**: Test Chrome, Firefox, Safari, Edge

### SEO Improvements
- **Meta Tags**: Correct title, description, viewport
- **Image Alt Text**: Descriptive for screen readers
- **Structured Data**: Schema.org markup for real estate

---

## 🚀 Future Development Guidelines

### Adding New Pages
1. Create routing structure (React Router if needed)
2. Follow component architecture patterns
3. Maintain brand consistency
4. Test all screen sizes

### Advanced Features
1. **Contact Forms**: Netlify Forms for free form handling
2. **Property Filters**: Advanced search with multiple criteria
3. **Interactive Maps**: Google Maps integration for office locations
4. **Virtual Tours**: 360° property viewing (Phase 2)

### Maintenance Schedule
- **Weekly**: Check performance metrics
- **Monthly**: Update property listings and imagery
- **Quarterly**: Review analytics and user feedback
- **Annually**: Major feature updates and redesign touches

---

## 📋 Checklist for New Features

Before deploying new features:

- [ ] Mobile responsiveness tested (320px - 1440px)
- [ ] Accessibility compliance checked
- [ ] Performance impact assessed
- [ ] Brand consistency maintained
- [ ] Production build tested
- [ ] SEO considerations implemented
- [ ] Cross-browser compatibility verified

---

## 🎨 Brand Guidelines Reminder

The design must always feel **luxury concierge** rather than **corporate brochure**. Every element should reinforce:
- **Trust**: Professional, established authority
- **Exclusivity**: High-net-worth investor appeal
- **Quality**: Attention to detail in every pixel
- **Sophistication**: Elegant, tasteful presentation

**Preserve #274F9A** as the primary brand color in all new elements!

---

This comprehensive setup ensures smooth development while maintaining the ultra-premium aesthetic that makes Adissia stand out as Coimbatore's most elite developer.
