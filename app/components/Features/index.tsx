import Image from "next/image";
import Link from "next/link";

interface datatype {
	imgSrc: string;
	heading: string;
	href: string;
}

const Aboutdata: datatype[] = [
	{
		imgSrc: "/assets/features/kopiHerbalPurwacleng.jpeg",
		heading: "Kopi Herbal PurwaCleng",
		href: "/products/kopi-herbal-purwacleng",
	},
	{
		imgSrc: "/assets/features/kopiHerbalGurah.jpeg",
		heading: "Kopi Herbal Gurah",
		href: "/products/kopi-herbal-gurah",
	},
	{
		imgSrc: "/assets/features/kopiHerbalGinseng.jpeg",
		heading: "Kopi Herbal Rempah",
		href: "/products/kopi-herbal-rempah",
	},
	{
		imgSrc: "/assets/features/kopiHerbalGinseng.jpeg",
		heading: "Kopi Herbal Ginseng",
		href: "/products/kopi-herbal-ginseng",
	},
	{
		imgSrc: "/assets/features/kopiPremiumRobusta.jpeg",
		heading: "Kopi Premium Robusta",
		href: "/products/kopi-premium-robusta",
	},
	{
		imgSrc: "/assets/features/kopiPremiumArabica.jpeg",
		heading: "Kopi Premium Arabica",
		href: "/products/kopi-premium-arabica",
	},
	{
		imgSrc: "/assets/features/kopiPremiumSpecialBlend.jpeg",
		heading: "Kopi Premium Special Blend",
		href: "/products/kopi-premium-special-blend",
	},
	{
		imgSrc: "/assets/features/kopiPremiumLuwak.jpeg",
		heading: "Kopi Premium Luwak Liar",
		href: "/products/kopi-premium-luwak-liar",
	},
];

const Features = () => {
	return (
		<div className="bg-babyblue" id="products">
			<div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
					Produk Kopi Kami
				</h3>
				<h5 className="text-black opacity-60 text-lg font-normal text-center">
					Nikmati dua kategori utama: Kopi Herbal yang menyehatkan dan Kopi
					Premium dengan cita rasa khas kopi Negeri Tembakau.
				</h5>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
					{Aboutdata.map((item, i) => (
						<div
							key={i}
							className="bg-white rounded-2xl p-5 featureShadow flex flex-col justify-between"
						>
							<Image
								src={item.imgSrc}
								alt={item.imgSrc}
								width={300}
								height={300}
								className="mb-2 self-center"
							/>
							<h3 className="text-2xl font-semibold text-black">
								{item.heading}
							</h3>
							<Link
								href={item.href}
								className="text-fawn-300 text-xl font-medium flex gap-2 pt-10 pb-2 hover:text-fawn-400"
							>
								Pelajari Lebih Lanjut
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
