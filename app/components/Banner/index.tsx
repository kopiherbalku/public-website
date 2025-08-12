import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<div className="bg-black/60 bg-[url(/assets/banner/kopiLadang.jpeg)] bg-no-repeat bg-cover bg-blend-overlay lg:h-screen h-auto">
			<div className="mx-auto max-w-6xl pb-24 px-6 h-full content-center">
				<div className="grid grid-cols-1 lg:grid-cols-12">
					<div className="col-span-9 flex flex-col justify-evenly relative">
						<h1 className="text-fawn-600 text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5">
							Kopi Herbal Terbaik <br /> Se-Indonesia
						</h1>
						<h3 className="text-white  text-lg font-normal text-center lg:text-start pt-8">
							KopiHerbalku hadir untuk memanjakan para pecinta kopi dengan
							sensasi ngopi ala kafe berkelas, langsung di rumah, dengan harga
							yang terjangkau. Kami menggunakan biji kopi pilihan petik merah
							dan 100% bahan herbal alami yang bermanfaat bagi kesehatan.
						</h3>
						<div className="pt-8 mx-auto lg:mx-0">
							<Link
								className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-fawn-400 hover:text-white hover:bg-fawn-300"
								href="#products"
							>
								Pelajari Lebih Lanjut
							</Link>
						</div>
					</div>

					{/* <div className="col-span-3 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0">
						<Image
							src="/assets/banner/kopiSingle_removed.png"
							alt="nothing"
							width={1000}
							height={800}
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Banner;
