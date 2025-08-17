import "../globals.css";

export const metadata = {
	title: "Daftar Harga - KopiHerbalKu",
	description: "Kopi Herbal Terbaik Se-Indonesia",
};

export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main>{children}</main>;
}
