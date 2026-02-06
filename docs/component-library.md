# Component Library

This document provides a comprehensive reference for all custom components available in RDocs.

## FeatureCard

A reusable card component for showcasing features with icons, titles, and descriptions.

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | Component | No | React icon component to display |
| `title` | string | Yes | Card title |
| `description` | string | Yes | Card description |
| `link` | string | No | Optional link URL |

### Usage

```jsx
import { FiZap } from 'react-icons/fi';
import FeatureCard from '@site/src/components/FeatureCard';

<FeatureCard
  icon={FiZap}
  title="Fast Performance"
  description="Built for speed and efficiency"
  link="/docs/performance"
/>
```

### Example

```jsx live
function FeatureCardExample() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      <FeatureCard
        title="Modern Design"
        description="Beautiful and contemporary user interface"
      />
      <FeatureCard
        title="Developer Friendly"
        description="Easy to customize and extend"
      />
    </div>
  );
}
```

## Callout

An enhanced admonition component for displaying important information with different severity levels.

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | string | No | 'info' | Type of callout: 'info', 'warning', 'success', 'error', 'tip' |
| `title` | string | No | - | Optional title for the callout |
| `children` | ReactNode | Yes | - | Content to display |

### Usage

```jsx
import Callout from '@site/src/components/Callout';

<Callout type="info" title="Important Information">
  This is an informational callout with custom styling.
</Callout>
```

### Types

**Info** - For general information
```jsx
<Callout type="info" title="Did you know?">
  You can customize the entire design system.
</Callout>
```

**Warning** - For warnings and cautions
```jsx
<Callout type="warning" title="Caution">
  Make sure to test in both light and dark modes.
</Callout>
```

**Success** - For positive messages
```jsx
<Callout type="success" title="Great job!">
  Your build completed successfully.
</Callout>
```

**Error** - For errors and critical issues
```jsx
<Callout type="error" title="Error">
  Something went wrong. Please check your configuration.
</Callout>
```

**Tip** - For helpful tips
```jsx
<Callout type="tip" title="Pro Tip">
  Use CSS variables for consistent theming.
</Callout>
```

## ScrollToTop

A floating button that appears when scrolling down and smoothly scrolls back to the top when clicked.

### Usage

This component is typically added to the Root component or Layout wrapper:

```jsx
import ScrollToTop from '@site/src/components/ScrollToTop';

export default function Root({children}) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}
```

### Features

- Appears after scrolling 300px down
- Smooth scroll animation
- Fixed positioning in bottom-right corner
- Responsive sizing for mobile devices
- Gradient background matching theme

## Using Components in MDX

All custom components can be used directly in MDX files:

```mdx
---
title: My Page
---

import { FiCode, FiBook } from 'react-icons/fi';
import FeatureCard from '@site/src/components/FeatureCard';
import Callout from '@site/src/components/Callout';

# Welcome

<Callout type="info" title="Getting Started">
  This guide will help you get started quickly.
</Callout>

## Features

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
  <FeatureCard
    icon={FiCode}
    title="Code Examples"
    description="Interactive code examples throughout"
  />
  <FeatureCard
    icon={FiBook}
    title="Documentation"
    description="Comprehensive guides and references"
  />
</div>
```

## Styling Components

All components use CSS modules for styling. To customize:

1. Locate the component's `styles.module.css` file
2. Override styles using CSS custom properties
3. Or create your own variant by extending the component

### Example: Custom FeatureCard Variant

```jsx
import FeatureCard from '@site/src/components/FeatureCard';
import styles from './custom-styles.module.css';

<FeatureCard
  className={styles.customCard}
  title="Custom Styled Card"
  description="With additional styling"
/>
```

## Accessibility

All components follow accessibility best practices:

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Sufficient color contrast
- Screen reader friendly

## Performance

Components are optimized for performance:

- Lazy loading where applicable
- Minimal re-renders
- Efficient CSS with CSS modules
- Tree-shakeable imports

## Creating Custom Components

To create your own component:

1. Create a new directory in `src/components/`
2. Add `index.js` for the component logic
3. Add `styles.module.css` for styling
4. Export the component
5. Import and use in your pages

### Example Structure

```
src/components/MyComponent/
├── index.js
└── styles.module.css
```

```jsx
// index.js
import React from 'react';
import styles from './styles.module.css';

export default function MyComponent({ title, children }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
```
