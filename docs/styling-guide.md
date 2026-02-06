# Styling Guide

This guide covers the CSS architecture, naming conventions, and best practices for styling in RDocs.

## CSS Architecture

The styling system is organized into several layers:

1. **Design Tokens** (`custom.css`) - CSS custom properties for colors, spacing, typography
2. **Global Styles** - Base styles applied to all elements
3. **Utility Classes** - Reusable helper classes
4. **Component Styles** - CSS modules for individual components
5. **Theme Overrides** - Customizations for Docusaurus theme components

## File Structure

```
src/css/
└── custom.css          # Main stylesheet with design tokens

src/components/
├── FeatureCard/
│   └── styles.module.css
├── Callout/
│   └── styles.module.css
└── ScrollToTop/
    └── styles.module.css

src/pages/
└── index.module.css    # Homepage specific styles
```

## Naming Conventions

### CSS Custom Properties

Use kebab-case with descriptive prefixes:

```css
/* Color variables */
--ifm-color-primary
--ifm-color-primary-dark
--ifm-color-primary-light

/* Spacing variables */
--ifm-spacing-horizontal
--ifm-spacing-vertical

/* Component-specific */
--ifm-navbar-height
--ifm-sidebar-width
```

### CSS Classes

Use camelCase for CSS module classes:

```css
/* Component classes */
.featureCard
.heroTitle
.ctaButton

/* Modifier classes */
.cardLarge
.buttonPrimary
.textCenter
```

### Utility Classes

Use kebab-case for global utility classes:

```css
.gradient-text
.hover-lift
.fade-in
.glass
```

## Design Tokens

### Colors

Always use CSS custom properties for colors:

```css
/* Good */
.myElement {
  color: var(--ifm-color-primary);
  background: var(--ifm-background-color);
}

/* Avoid */
.myElement {
  color: #6366f1;
  background: #ffffff;
}
```

### Spacing

Use the spacing scale for consistent margins and padding:

```css
/* Spacing scale */
0.25rem  /* 4px */
0.5rem   /* 8px */
0.75rem  /* 12px */
1rem     /* 16px */
1.5rem   /* 24px */
2rem     /* 32px */
3rem     /* 48px */
4rem     /* 64px */
```

### Typography

Use the typography scale for font sizes:

```css
/* Font size scale */
0.75rem   /* 12px - small */
0.875rem  /* 14px - body small */
1rem      /* 16px - body */
1.125rem  /* 18px - large */
1.25rem   /* 20px - h6 */
1.5rem    /* 24px - h5 */
2rem      /* 32px - h4 */
2.5rem    /* 40px - h3 */
3rem      /* 48px - h2 */
4rem      /* 64px - h1 */
```

## Responsive Design

### Mobile-First Approach

Write styles for mobile first, then add media queries for larger screens:

```css
/* Mobile styles (default) */
.container {
  padding: 1rem;
  font-size: 14px;
}

/* Tablet and up */
@media screen and (min-width: 768px) {
  .container {
    padding: 1.5rem;
    font-size: 15px;
  }
}

/* Desktop and up */
@media screen and (min-width: 996px) {
  .container {
    padding: 2rem;
    font-size: 16px;
  }
}
```

### Breakpoints

Use consistent breakpoints:

```css
/* Mobile: < 768px (default) */
/* Tablet: 768px - 996px */
@media screen and (min-width: 768px) and (max-width: 996px) { }

/* Desktop: > 996px */
@media screen and (min-width: 996px) { }
```

## Dark Mode

### Defining Dark Mode Styles

Use the `[data-theme='dark']` selector:

```css
/* Light mode (default) */
.card {
  background: white;
  color: #111827;
}

/* Dark mode */
[data-theme='dark'] .card {
  background: #1e293b;
  color: #e2e8f0;
}
```

### Dark Mode Best Practices

1. **Test Both Modes**: Always verify styles in both light and dark modes
2. **Use Semantic Colors**: Use color variables that adapt automatically
3. **Adjust Opacity**: Reduce opacity for dark mode backgrounds
4. **Increase Contrast**: Ensure text remains readable

```css
/* Good - uses semantic variables */
.element {
  color: var(--ifm-font-color-base);
  background: var(--ifm-background-color);
}

/* Avoid - hardcoded colors */
.element {
  color: black;
  background: white;
}
```

## Animations

### Transition Properties

Use CSS custom properties for consistent transitions:

```css
.button {
  transition: all var(--ifm-transition-base);
}

.card {
  transition: transform var(--ifm-transition-base),
              box-shadow var(--ifm-transition-base);
}
```

### Keyframe Animations

Define reusable keyframe animations:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fadeIn 0.6s ease-out;
}
```

### Performance

For smooth animations:

1. **Use Transform**: Prefer `transform` over `top/left`
2. **Use Opacity**: Prefer `opacity` over `visibility`
3. **Avoid Layout Shifts**: Don't animate `width`, `height`, `margin`, `padding`
4. **Use Will-Change**: For complex animations

```css
/* Good - GPU accelerated */
.element {
  transform: translateY(-4px);
  opacity: 0.8;
}

/* Avoid - causes layout reflow */
.element {
  top: -4px;
  display: none;
}
```

## CSS Modules

### Importing Styles

```jsx
import styles from './styles.module.css';

function MyComponent() {
  return <div className={styles.container}>Content</div>;
}
```

### Composing Classes

```jsx
import clsx from 'clsx';
import styles from './styles.module.css';

function MyComponent({ isActive }) {
  return (
    <div className={clsx(styles.card, isActive && styles.active)}>
      Content
    </div>
  );
}
```

### Global Classes with Modules

```jsx
import clsx from 'clsx';
import styles from './styles.module.css';

function MyComponent() {
  return (
    <div className={clsx('card', 'hover-lift', styles.custom)}>
      Content
    </div>
  );
}
```

## Best Practices

### 1. Use CSS Custom Properties

```css
/* Good */
.button {
  padding: var(--ifm-spacing-horizontal);
  color: var(--ifm-color-primary);
}

/* Avoid */
.button {
  padding: 1.5rem;
  color: #6366f1;
}
```

### 2. Keep Specificity Low

```css
/* Good */
.card { }
.cardTitle { }

/* Avoid */
div.container .card .title { }
```

### 3. Use Semantic Class Names

```css
/* Good */
.heroTitle
.featureCard
.ctaButton

/* Avoid */
.big-text
.blue-box
.btn1
```

### 4. Group Related Properties

```css
.element {
  /* Positioning */
  position: relative;
  top: 0;
  left: 0;

  /* Box model */
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 0;

  /* Typography */
  font-size: 1rem;
  color: var(--ifm-color-primary);

  /* Visual */
  background: white;
  border-radius: var(--ifm-border-radius);
  box-shadow: var(--ifm-shadow-md);

  /* Misc */
  transition: all var(--ifm-transition-base);
}
```

### 5. Comment Complex Styles

```css
/*
 * Gradient border effect using pseudo-element
 * Creates a 2px gradient border around the element
 */
.gradientBorder::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  background: var(--gradient-primary);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

## Common Patterns

### Card with Hover Effect

```css
.card {
  padding: 2rem;
  background: var(--ifm-card-background-color);
  border-radius: var(--ifm-border-radius-lg);
  box-shadow: var(--ifm-shadow-md);
  transition: all var(--ifm-transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--ifm-shadow-xl);
}
```

### Gradient Background

```css
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-mesh);
  opacity: 0.5;
}
```

### Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
```

## Troubleshooting

### Styles Not Applying

1. Check CSS module import
2. Verify class name spelling
3. Check specificity conflicts
4. Clear browser cache

### Dark Mode Issues

1. Ensure `[data-theme='dark']` selector is used
2. Test with browser DevTools
3. Check color contrast
4. Verify CSS variable usage

### Animation Performance

1. Use `transform` and `opacity`
2. Add `will-change` for complex animations
3. Limit simultaneous animations
4. Test on lower-end devices
