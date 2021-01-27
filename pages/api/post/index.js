/**
 * https://nextjs.org/docs/api-routes/dynamic-api-routes
 * https://nextjs.org/docs/routing/dynamic-routes
 * 
 * Predefined API routes take precedence over dynamic API routes, and dynamic API routes over catch all API routes. Take a look at the following examples:
 * pages/api/post/create.js - Will match /api/post/create
 * pages/api/post/[pid].js - Will match /api/post/1, /api/post/abc, etc. But not /api/post/create
 * pages/api/post/[...slug].js - Will match /api/post/1/2, /api/post/a/b/c, etc. But not /api/post/create, /api/post/abc
 */
