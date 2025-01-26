import { createClient } from 'next-sanity'

// Client-side environment variables for Sanity (exposed to browser)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-10-21';  // Optional, default API version

// Sanity client for the front-end
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for fast content delivery, set false for server-side content
});
