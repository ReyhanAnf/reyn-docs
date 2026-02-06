---
title: Protected Document Example
description: Example of a password-protected documentation page
---

import ProtectedDoc from '@site/src/components/ProtectedDoc';

# Protected Documentation Example

This page demonstrates how to protect documentation with a password/access key.

<ProtectedDoc
  accessKey="secret123"
  storageKey="example-doc-access"
  title="Confidential Documentation"
  description="This is a protected document. Enter the access key to view the content.">

## Secret Content

This content is only visible after entering the correct access key.

### Features

- Password protection for sensitive documentation
- LocalStorage persistence (remembers access)
- Lock/unlock toggle
- Show/hide password option
- Smooth animations
- Responsive design
- Dark mode support

### Usage Example

```jsx
import ProtectedDoc from '@site/src/components/ProtectedDoc';

<ProtectedDoc
  accessKey="your-secret-key"
  storageKey="unique-storage-key"
  title="Protected Documentation"
  description="Enter the access key to continue.">

  Your protected content here...

</ProtectedDoc>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | Content to protect |
| `accessKey` | string | Yes | - | The correct access key/password |
| `storageKey` | string | No | 'doc-access' | LocalStorage key for persistence |
| `title` | string | No | 'Protected Documentation' | Title on lock screen |
| `description` | string | No | Default message | Description on lock screen |

### Security Notes

- Access key is stored in localStorage after successful unlock
- User can lock the document again using the "Lock Again" button
- Access persists across page refreshes until manually locked
- For demo purposes, the access key is: **secret123**

### Best Practices

1. Use unique `storageKey` for each protected document
2. Choose strong access keys
3. Communicate access keys securely to authorized users
4. Consider using environment variables for production keys
5. Regularly rotate access keys for sensitive content

</ProtectedDoc>
