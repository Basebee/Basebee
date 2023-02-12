import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ['js', 'jsx', 'mdx'],
//   reactStrictMode: true,
//   experimental: {
//     scrollRestoration: true,
//   },
// }

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypePrism],
	},
});

// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	/** Enables hot reloading for local packages without a build step */
	transpilePackages: ['@basebee/api', '@basebee/auth', '@basebee/db'],
	/** We already do linting and typechecking as separate tasks in CI */
	eslint: { ignoreDuringBuilds: !!process.env.CI },
	typescript: { ignoreBuildErrors: !!process.env.CI },
};

export default withMDX(config);
