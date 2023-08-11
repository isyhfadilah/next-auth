// Without a defined matcher, this one line apples next-auth 
// to the entire project 
export { default } from 'next-auth/middleware'

// applies next-auth only to matching routes - can be regex 
export const config = { matcher: ["/extra", "/dashboard"] }