# Protected Documentation Guide

Learn how to protect your documentation pages with password/access key authentication.

## Overview

The `ProtectedDoc` component allows you to add password protection to any documentation page. Users must enter the correct access key before they can view the protected content.

## Features

- **Password Protection**: Secure your sensitive documentation
- **LocalStorage Persistence**: Access is remembered across sessions
- **Lock/Unlock Toggle**: Users can manually lock documents again
- **Show/Hide Password**: Toggle password visibility
- **Smooth Animations**: Professional UI with fade-in effects
- **Responsive Design**: Works on all screen sizes
- **Dark Mode Support**: Adapts to theme automatically

## Installation

The `ProtectedDoc` component is already available in your Docusaurus site at:

```
src/components/ProtectedDoc/
├── index.js
└── styles.module.css
```

## Basic Usage

### 1. Import the Component

In your MDX file, import the component:

```mdx
import ProtectedDoc from '@site/src/components/ProtectedDoc';
```

### 2. Wrap Your Content

Wrap the content you want to protect:

```mdx
<ProtectedDoc accessKey="your-secret-key">

## Your Protected Content

This content is only visible after authentication.

</ProtectedDoc>
```

## Configuration

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | ✅ Yes | - | The content to protect |
| `accessKey` | string | ✅ Yes | - | The password/key required for access |
| `storageKey` | string | No | 'doc-access' | Unique key for localStorage |
| `title` | string | No | 'Protected Documentation' | Title shown on lock screen |
| `description` | string | No | Default message | Description shown on lock screen |

### Example with All Props

```mdx
<ProtectedDoc
  accessKey="confidential2024"
  storageKey="project-alpha-docs"
  title="Project Alpha Documentation"
  description="This documentation contains confidential information. Please enter your access key.">

Your protected content here...

</ProtectedDoc>
```

## Use Cases

### 1. Protecting Entire Pages

Create a protected documentation page:

```mdx
---
title: Confidential API Documentation
---

import ProtectedDoc from '@site/src/components/ProtectedDoc';

<ProtectedDoc
  accessKey="api-secret-2024"
  storageKey="api-docs-access"
  title="API Documentation"
  description="This API documentation is for authorized developers only.">

# API Documentation

## Authentication

...your API docs...

</ProtectedDoc>
```

### 2. Protecting Sections

Protect specific sections within a page:

```mdx
# Public Documentation

This section is visible to everyone.

## Public Features

- Feature 1
- Feature 2

<ProtectedDoc
  accessKey="internal-only"
  storageKey="internal-section"
  title="Internal Features"
  description="This section is for internal team members only.">

## Internal Features

- Internal Feature 1
- Internal Feature 2

</ProtectedDoc>
```

### 3. Multiple Protected Sections

Use different keys for different sections:

```mdx
<ProtectedDoc
  accessKey="dev-team-key"
  storageKey="dev-section">

## Developer Section

Content for developers...

</ProtectedDoc>

<ProtectedDoc
  accessKey="admin-key"
  storageKey="admin-section">

## Admin Section

Content for administrators...

</ProtectedDoc>
```

## Security Considerations

### Access Key Management

1. **Use Strong Keys**: Choose complex, unique keys
2. **Rotate Regularly**: Change keys periodically for sensitive content
3. **Secure Distribution**: Share keys through secure channels
4. **Environment Variables**: Consider using env vars for production

### Limitations

- **Client-Side Only**: This is client-side protection, not server-side
- **Not Cryptographic**: Keys are visible in source code
- **LocalStorage**: Access persists in browser localStorage
- **Best For**: Internal documentation, team wikis, non-critical content

### For Production Security

If you need true security:

1. Use server-side authentication
2. Implement proper user management
3. Use HTTPS and secure cookies
4. Consider authentication providers (OAuth, SAML)

## Customization

### Custom Styling

Override styles using CSS modules or global CSS:

```css
/* In your custom.css */
.lockCard {
  /* Your custom styles */
}
```

### Custom Messages

Customize the lock screen messages:

```jsx
<ProtectedDoc
  title="🔒 Restricted Access"
  description="Only authorized personnel may access this documentation. Contact admin@example.com for access.">
  ...
</ProtectedDoc>
```

## Troubleshooting

### Access Not Persisting

- Check that `storageKey` is unique for each protected section
- Verify localStorage is enabled in the browser
- Clear browser cache if issues persist

### Key Not Working

- Ensure the key matches exactly (case-sensitive)
- Check for extra spaces in the key
- Verify the component is properly imported

### Styling Issues

- Check that CSS modules are loading correctly
- Verify theme variables are defined
- Test in both light and dark modes

## Examples

See the [Protected Example Page](./protected-example.md) for a live demonstration.

## Best Practices

1. **Unique Storage Keys**: Use different `storageKey` for each protected section
2. **Clear Titles**: Provide descriptive titles for the lock screen
3. **Helpful Descriptions**: Explain who should have access
4. **Contact Information**: Include how to request access
5. **Regular Updates**: Keep access keys current and secure
6. **Documentation**: Document which keys protect which content

## Advanced Usage

### Conditional Protection

Protect content based on environment:

```jsx
import ProtectedDoc from '@site/src/components/ProtectedDoc';

const isDevelopment = process.env.NODE_ENV === 'development';

{isDevelopment ? (
  <div>Content visible in development</div>
) : (
  <ProtectedDoc accessKey="prod-key">
    Protected in production
  </ProtectedDoc>
)}
```

### Multiple Access Levels

Create wrapper components for different access levels:

```jsx
// TeamDoc.js
export function TeamDoc({ children }) {
  return (
    <ProtectedDoc
      accessKey="team-2024"
      storageKey="team-access"
      title="Team Documentation">
      {children}
    </ProtectedDoc>
  );
}

// AdminDoc.js
export function AdminDoc({ children }) {
  return (
    <ProtectedDoc
      accessKey="admin-2024"
      storageKey="admin-access"
      title="Admin Documentation">
      {children}
    </ProtectedDoc>
  );
}
```

## Support

For issues or questions about the ProtectedDoc component:

1. Check this documentation
2. Review the example page
3. Inspect the component source code
4. Contact your documentation administrator
