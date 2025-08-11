import Image from "next/image";
import Link from "next/link";

interface datatype {
	imgSrc: string;
	heading: string;
}

const Aboutdata: datatype[] = [
	{
		imgSrc: "/assets/features/kopiHerbalPurwacleng.jpeg",
		heading: "Kopi Herbal PurwaCleng",
	},
	{
		imgSrc: "/assets/features/kopiHerbalGurah.jpeg",
		heading: "Kopi Herbal Gurah",
	},
	{
		imgSrc: "/assets/features/kopiHerbalGinseng.jpeg",
		heading: "Kopi Herbal Ginseng",
	},
	{
		imgSrc: "/assets/features/kopiPremiumRobusta.jpeg",
		heading: "Kopi Premium Robusta",
	},
	{
		imgSrc: "/assets/features/kopiPremiumArabica.jpeg",
		heading: "Kopi Premium Arabica",
	},
	{
		imgSrc: "/assets/features/kopiPremiumLuwak.jpeg",
		heading: "Kopi Premium Luwak Liar",
	},
];

const Features = () => {
	return (
		<div className="bg-babyblue" id="features">
			<div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
					Produk Kopi Kami
				</h3>
				<h5 className="text-black opacity-60 text-lg font-normal text-center">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque <br /> laudantium, totam rem aperiam, eaque
					ipsa quae ab.
				</h5>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
					{Aboutdata.map((item, i) => (
						<div
							key={i}
							className="bg-white rounded-2xl p-5 featureShadow flex flex-col"
						>
							<Image
								src={item.imgSrc}
								alt={item.imgSrc}
								width={300}
								height={300}
								className="mb-2 self-center"
							/>
							<h3 className="text-2xl font-semibold text-black mt-5">
								{item.heading}
							</h3>
							<Link
								href={"/"}
								className="text-fawn-300 text-xl font-medium flex gap-2 pt-10 pb-2"
							>
								Learn more
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
