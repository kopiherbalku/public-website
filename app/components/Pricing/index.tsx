import Image from "next/image";
import Link from "next/link";

const names = [
	{
		heading: "Kopi Herbal PurwaCleng",
		imgSrc: "/assets/features/kopiHerbalPurwacleng.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Herbal%20PurwaCleng.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
	{
		heading: "Kopi Herbal Gurah",
		imgSrc: "/assets/features/kopiHerbalGurah.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Herbal%20Gurah.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
	{
		heading: "Kopi Herbal Rempah",
		imgSrc: "/assets/features/kopiHerbalGinseng.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Herbal%20Rempah.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
	{
		heading: "Kopi Herbal Ginseng",
		imgSrc: "/assets/features/kopiHerbalGinseng.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Herbal%20Ginseng.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
	{
		heading: "Kopi Premium Robusta",
		imgSrc: "/assets/features/kopiPremiumRobusta.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Premium%20Robusta.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
	{
		heading: "Kopi Premium Arabica",
		imgSrc: "/assets/features/kopiPremiumArabica.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Premium%20Arabica.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
	{
		heading: "Kopi Premium Special Blend",
		imgSrc: "/assets/features/kopiPremiumSpecialBlend.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Premium%20Special%20Blend.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
	{
		heading: "Kopi Premium Luwak Liar",
		imgSrc: "/assets/features/kopiPremiumLuwak.jpeg",
		href: "https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20memesan%20Kopi%20Premium%20Luwak%20Liar.%20Apakah%20tersedia?%0ATerima%20Kasih",
		price: 79000,
	},
];

const Pricing = () => {
	return (
		<div id="pricing" className="bg-floral_white-600 relative">
			<div className="mx-auto max-w-7xl py-10 sm:py-20 lg:px-8">
				<h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">
					Daftar Harga
				</h3>
				<h5 className="text-black opacity-60 text-lg font-normal text-center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sed
					similique hic inventore porro corrupti! Cum possimus sapiente,
					voluptatum reiciendis totam nihil tenetur alias sint! Distinctio
					veniam obcaecati facilis temporibus.
				</h5>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-16 mx-5 gap-6">
					{names.map((item, index) => (
						<div
							className="p-5 bg-white rounded-3xl bxshd relative cursor-pointer hover:bg-fawn-400 group flex flex-col justify-between"
							key={index}
						>
							<h4 className="text-center text-xl sm:text-xl font-semibold mb-8 text-midnightblue group-hover:text-white">
								{item.heading}
							</h4>
							<div>
								<Image
									src={item.imgSrc}
									alt={item.heading}
									width={200}
									height={200}
									className="mx-auto my-4 block rounded-lg"
								/>
								<h2 className="text-xl text-center sm:text-2xl font-semibold text-midnightblue mb-3 group-hover:text-white">
									Rp{item.price}
								</h2>
								<Link href={item.href} target="_blank">
									<button className="text-lg font-medium text-white w-full bg-fawn-400 border-fawn-400 hover:text-white group-hover:bg-fawn-500 group-hover:border-fawn-500 border-2 rounded-full py-2 px-2">
										Pesan Produk Ini
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
