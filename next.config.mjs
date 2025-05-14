import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],
    },
  },
  redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      {
        source: '/speaking',
        destination: '/',
        permanent: false,
      },
      {
        source: '/thank-you',
        destination: '/',
        permanent: false,
      },
      {
        source: '/uses',
        destination: '/',
        permanent: false,
      },
      {
        source: '/articles',
        destination: '/coming-soon',
        permanent: false,
      },
      {
        source: '/projects',
        destination: '/coming-soon',
        permanent: false,
      },
    ]
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
