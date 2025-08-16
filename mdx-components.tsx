import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components = {
	// Allows customizing built-in components, e.g. to add styling.
	h1: ({ children }) => (
		<h1 className="text-center">
			<strong>{children}</strong>
		</h1>
	),
	img: (props) => (
		<Image
			className="mx-auto my-4 block rounded-lg"
			width={450}
			height={1000}
			{...(props as ImageProps)}
		/>
	),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
	return components;
}
