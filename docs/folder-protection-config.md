# Folder-Level Protection Configuration

This document explains how to configure automatic protection for entire documentation folders.

## Overview

The `Root.js` wrapper component automatically protects entire folders without requiring imports in each individual file. This is achieved by checking the current route path and wrapping protected routes with the `ProtectedDoc` component.

## How It Works

1. **Root Component**: Located at `src/theme/Root.js`
2. **Path Matching**: Checks if current URL matches protected paths
3. **Automatic Wrapping**: Wraps matching routes with `ProtectedDoc`
4. **No Imports Needed**: Individual files don't need any modifications

## Configuration

### Protected Routes File

We have moved the configuration to a dedicated file for easier management.

Edit `src/data/protectedRoutes.js` to configure protected routes:

```javascript
const protectedRoutes = [
  {
    path: '/docs/talents-mapping',
    accessKey: 'talents2024',
    storageKey: 'talents-mapping-access',
    title: 'Talents Mapping Documentation',
    description: 'This documentation contains confidential talent mapping information.',
  },
  // Add more routes here
];

export default protectedRoutes;
```

### Route Configuration Options

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `path` | string | ✅ Yes | URL path to protect (e.g., `/docs/folder-name`) |
| `accessKey` | string | ✅ Yes | Password/key required for access |
| `storageKey` | string | ✅ Yes | Unique localStorage key |
| `title` | string | ✅ Yes | Title shown on lock screen |
| `description` | string | ✅ Yes | Description shown on lock screen |

## Current Protected Routes

### Talents Mapping Folder

- **Path**: `/docs/talents-mapping`
- **Access Key**: `talents2024`
- **Storage Key**: `talents-mapping-access`
- **Description**: Contains confidential talent mapping information

All files and subfolders under `docs/Talents Mapping/` are automatically protected.

## Adding New Protected Folders

### Step 1: Edit protectedRoutes.js

Add a new entry to the `protectedRoutes` array:

```javascript
const protectedRoutes = [
  // Existing route
  {
    path: '/docs/talents-mapping',
    accessKey: 'talents2024',
    storageKey: 'talents-mapping-access',
    title: 'Talents Mapping Documentation',
    description: 'Confidential talent mapping information.',
  },
  // New protected route
  {
    path: '/docs/internal-docs',
    accessKey: 'internal2024',
    storageKey: 'internal-docs-access',
    title: 'Internal Documentation',
    description: 'This documentation is for internal use only.',
  },
];
```

### Step 2: Test the Protection

1. Navigate to the protected path
2. Verify the lock screen appears
3. Enter the access key
4. Confirm content is accessible

## Path Matching

The protection uses `startsWith()` matching, which means:

- `/docs/Talents Mapping` protects all pages under this folder
- `/docs/Talents Mapping/subfolder` is also protected
- `/docs/Talents Mapping/subfolder/page.md` is also protected

### Examples

```javascript
// Protects entire folder and all subfolders
path: '/docs/Talents Mapping'

// Protects specific subfolder only
path: '/docs/Talents Mapping/2026 Q1'

// Protects multiple top-level folders
[
  { path: '/docs/Confidential' },
  { path: '/docs/Internal' },
  { path: '/docs/Admin' },
]
```

## Security Best Practices

### Access Key Management

1. **Use Strong Keys**: Choose complex, unique keys for each protected route
2. **Different Keys**: Use different keys for different folders
3. **Rotate Regularly**: Change keys periodically for sensitive content
4. **Secure Distribution**: Share keys through secure channels only

### Storage Keys

1. **Unique Per Route**: Each protected route should have a unique `storageKey`
2. **Descriptive Names**: Use clear, descriptive names (e.g., `talents-mapping-access`)
3. **Consistent Format**: Use kebab-case for consistency

## Troubleshooting

### Protection Not Working

1. **Check Path**: Ensure the path in `Root.js` matches the actual URL
2. **Case Sensitivity**: Paths are case-sensitive
3. **URL Encoding**: Spaces in folder names become `%20` in URLs
4. **Clear Cache**: Clear browser cache and localStorage

### Access Not Persisting

1. **Check Storage Key**: Ensure `storageKey` is unique
2. **LocalStorage Enabled**: Verify browser allows localStorage
3. **Private Browsing**: May not persist in private/incognito mode

### Multiple Protections

If a page matches multiple protected routes, the **first match** wins. Order routes from most specific to least specific:

```javascript
const protectedRoutes = [
  // More specific first
  { path: '/docs/Talents Mapping/2026 Q1' },
  // Less specific after
  { path: '/docs/Talents Mapping' },
];
```

## Advantages Over Per-File Protection

### ✅ Centralized Management

- All protection rules in one file
- Easy to update access keys
- Simple to add/remove protected folders

### ✅ No File Modifications

- No imports needed in individual files
- No MDX frontmatter required
- Works with existing markdown files

### ✅ Automatic Coverage

- New files in protected folders are automatically protected
- Subfolders inherit protection
- No risk of forgetting to protect a file

### ✅ Consistent UX

- Same lock screen for all files in a folder
- Unified access key per section
- Single unlock for entire folder

## Limitations

### Client-Side Only

- Protection is client-side, not server-side
- Access keys visible in source code
- Not suitable for highly sensitive data

### Path-Based

- Protection based on URL path
- Cannot protect based on user roles
- Cannot protect based on other conditions

## Migration Guide

### From Per-File Protection

If you have files with individual `ProtectedDoc` imports:

1. Remove the import statements
2. Remove the `<ProtectedDoc>` wrapper
3. Add the folder path to `Root.js`
4. Test that protection still works

### Example Migration

**Before** (in each file):
```mdx
import ProtectedDoc from '@site/src/components/ProtectedDoc';

<ProtectedDoc accessKey="key123">
  Content here...
</ProtectedDoc>
```

**After** (no changes to files, just add to Root.js):
```javascript
// In src/theme/Root.js
{
  path: '/docs/folder-name',
  accessKey: 'key123',
  // ...
}
```

## Advanced Configuration

### Environment-Based Keys

Use environment variables for production:

```javascript
const protectedRoutes = [
  {
    path: '/docs/Talents Mapping',
    accessKey: process.env.TALENTS_ACCESS_KEY || 'talents2024',
    // ...
  },
];
```

### Conditional Protection

Protect only in production:

```javascript
const protectedRoutes = process.env.NODE_ENV === 'production'
  ? [
      { path: '/docs/Talents Mapping', /* ... */ },
    ]
  : []; // No protection in development
```

### Custom Lock Screens

Different lock screens for different folders:

```javascript
{
  path: '/docs/Executive',
  accessKey: 'exec2024',
  title: '🔒 Executive Documentation',
  description: 'This section is restricted to executive team members. Contact CEO for access.',
}
```

## Maintenance

### Regular Tasks

1. **Review Access Keys**: Monthly review of who has access
2. **Rotate Keys**: Quarterly key rotation for sensitive folders
3. **Audit Logs**: Check localStorage usage patterns
4. **Update Documentation**: Keep this guide current

### Monitoring

Check browser console for:
- Path matching issues
- Component rendering errors
- localStorage quota warnings

## Support

For issues with folder-level protection:

1. Check this configuration guide
2. Verify `Root.js` syntax
3. Test path matching in browser console
4. Review browser localStorage
5. Contact documentation administrator
