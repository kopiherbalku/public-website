export const metadata = {
	title: "Produk Kami - KopiHerbalKu",
	description: "Kopi Herbal Terbaik Se-Indonesia",
};

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="prose lg:prose-xl max-w-full px-35 py-20">{children}</main>
	);
}
