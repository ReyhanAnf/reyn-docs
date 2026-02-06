# Customization Guide

Welcome to the RDocs customization guide. This documentation will help you understand and customize the design system used in this Docusaurus site.

## Design System Overview

This site uses a modern, custom design system built on top of Docusaurus with the following key features:

- **Custom Color Palette**: Indigo/purple gradient primary colors, teal secondary, and amber accents
- **Typography**: Inter for body text, Outfit for headings, JetBrains Mono for code
- **Dark Mode**: Smooth transitions with custom dark theme colors
- **Animations**: Fade-in, hover effects, and scroll animations
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 996px

## Color Palette

### Light Mode

**Primary Colors (Indigo/Purple)**
- Primary: `#6366f1`
- Primary Dark: `#4f46e5`
- Primary Light: `#818cf8`

**Secondary Colors (Teal)**
- Secondary: `#14b8a6`
- Secondary Dark: `#0d9488`
- Secondary Light: `#2dd4bf`

**Accent Colors (Amber)**
- Accent: `#f59e0b`
- Accent Dark: `#d97706`
- Accent Light: `#fbbf24`

### Dark Mode

Colors are automatically adjusted for better contrast and readability in dark mode. The primary colors become brighter, and backgrounds shift to dark slate tones.

## Typography

### Font Families

```css
--ifm-font-family-base: 'Inter', sans-serif;
--ifm-font-family-heading: 'Outfit', sans-serif;
--ifm-font-family-monospace: 'JetBrains Mono', monospace;
```

### Font Sizes

- Base: 16px (15px on tablet, 14px on mobile)
- Headings: Responsive scaling with `font-weight: 700`

## Custom CSS Variables

All design tokens are available as CSS custom properties:

```css
/* Spacing */
--ifm-spacing-horizontal: 1.5rem;
--ifm-spacing-vertical: 1.5rem;

/* Shadows */
--ifm-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--ifm-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--ifm-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Border Radius */
--ifm-border-radius: 0.5rem;
--ifm-border-radius-lg: 0.75rem;

/* Transitions */
--ifm-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--ifm-transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
```

## Utility Classes

### Glassmorphism Effect

```jsx
<div className="glass">
  Content with glassmorphism effect
</div>
```

### Gradient Text

```jsx
<h1 className="gradient-text">
  Beautiful Gradient Text
</h1>
```

### Hover Lift Effect

```jsx
<div className="card hover-lift">
  Card that lifts on hover
</div>
```

### Fade In Animation

```jsx
<div className="fade-in">
  Content that fades in
</div>
```

## Customizing Colors

To change the color scheme, edit `src/css/custom.css`:

```css
:root {
  /* Change primary color */
  --ifm-color-primary: #your-color;
  --ifm-color-primary-dark: #darker-shade;
  --ifm-color-primary-light: #lighter-shade;
}
```

## Customizing Typography

To use different fonts, update the font imports and variables in `src/css/custom.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

:root {
  --ifm-font-family-base: 'YourFont', sans-serif;
}
```

## Dark Mode Configuration

Dark mode is configured in `docusaurus.config.js`:

```javascript
colorMode: {
  defaultMode: 'light',
  disableSwitch: false,
  respectPrefersColorScheme: true,
}
```

## Responsive Breakpoints

The design system uses the following breakpoints:

- **Desktop**: > 996px
- **Tablet**: 768px - 996px
- **Mobile**: < 768px

## Best Practices

1. **Use CSS Variables**: Always use CSS custom properties for colors and spacing
2. **Maintain Consistency**: Stick to the defined color palette and typography scale
3. **Test Dark Mode**: Always test changes in both light and dark modes
4. **Mobile First**: Design for mobile first, then enhance for larger screens
5. **Accessibility**: Ensure sufficient color contrast (WCAG AA minimum)

## Advanced Customization

For advanced customization, you can:

1. **Swizzle Components**: Use `npm run swizzle` to eject and customize Docusaurus components
2. **Add Custom Plugins**: Install additional Docusaurus plugins from the community
3. **Extend CSS**: Add your own CSS files and import them in `custom.css`
4. **Create Components**: Build custom React components in `src/components/`

## Getting Help

If you need help with customization:

1. Check the [Docusaurus Documentation](https://docusaurus.io/docs)
2. Review the [Component Library](./component-library.md)
3. Explore the [Styling Guide](./styling-guide.md)
