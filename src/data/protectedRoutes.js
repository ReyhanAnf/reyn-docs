/**
 * Certified Protection Configuration
 * Manage password-protected routes and folders here.
 */

const protectedRoutes = [
  {
    // Protect entire "Talents Mapping" folder
    path: '/docs/talents-mapping',
    accessKey: 'tm-iam-2026',
    storageKey: 'talents-mapping-access',
    title: 'Talents Mapping Documentation',
    description: 'This documentation contains confidential talent mapping information. Please enter your access key to continue.',
  },
  // Example of another protected route:
  /*
  {
    path: '/docs/internal-docs',
    accessKey: 'internal123',
    storageKey: 'internal-docs-access',
    title: 'Internal Team Docs',
    description: 'Restricted access for internal team only.',
  },
  */
];

export default protectedRoutes;
