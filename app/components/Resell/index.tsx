import Link from "next/link";

const Resell = () => {
	return (
		<section id="resell" className="bg-linen-500 py-16 px-4">
			<div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
				<h2 className="text-3xl font-extrabold text-gray-800 mb-4">
					Bergabung Bersama Kami!
				</h2>
				<h3 className="text-xl font-semibold text-gray-700 mb-6">
					Kesempatan Kemitraan KopiHerbalku
				</h3>
				<p className="text-gray-600 mb-4">
					KopiHerbalku membuka kesempatan bagi Anda yang ingin menjadi{" "}
					<strong>Reseller</strong> resmi. Dapatkan keuntungan menarik dan
					dukung gaya hidup sehat bersama produk berkualitas dari kami!
				</p>

				<h4 className="text-lg font-semibold text-gray-700 mb-2">
					Syarat & Ketentuan Kemitraan:
				</h4>
				<ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
					<li>Memiliki minat dan jaringan untuk pengembangan reseller</li>
					<li>
						Pembelanjaan awal minimal <strong>Rp500.000</strong>
					</li>
					<li>
						Diskon khusus <strong>25%</strong> dari harga normal
					</li>
					<li>
						Penjualan dikelola mandiri secara online dengan ongkir{" "}
						<strong>standar JNE</strong>, pengiriman dari{" "}
						<strong>Kantor Pusat</strong>
					</li>
					<li>
						Program <strong>"Reseller Gets Reseller"</strong> – dapatkan{" "}
						<strong>5% komisi</strong> dari reseller yang Anda referensikan
					</li>
				</ul>

				<p className="text-gray-700 mb-6">
					Bergabung sekarang dan mulai perjalanan sukses Anda bersama
					KopiHerbalku!
				</p>

				<Link
					href="https://wa.me/6281292775170?text=Halo,%0ASaya%20ingin%20mendaftar%20program%20kemitraan.%20Apakah%20bisa?%0ATerima%20Kasih"
					className="inline-block bg-fawn-500 hover:bg-fawn-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
				>
					Daftar Sekarang
				</Link>
			</div>
		</section>
	);
};

export default Resell;
