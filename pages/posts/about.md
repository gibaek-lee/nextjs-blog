* Quick Review: You want to add blog post categories as a new dynamic route pages/categories/[id].js. What is the correct way to implement this?

- Use `getStaticProps` to fetch a specific post given an ID and `getStaticPaths` to fetch all possible blog posts. 

https://nextjs.org/learn/basics/dynamic-routes