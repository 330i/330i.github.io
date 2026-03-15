import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    transpilePackages: ['three'],
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: ['remark-gfm'],
        rehypePlugins: ['rehype-starry-night', 'rehype-mdx-code-props']
    },
})

export default withMDX(nextConfig)