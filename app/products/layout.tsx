import "../globals.css";

export const metadata = {
	title: "Produk Kami - KopiHerbalKu",
	description: "Kopi Herbal Terbaik Se-Indonesia",
};

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="px-5 md:px-20 xl:px-40">{children}</main>;
}
