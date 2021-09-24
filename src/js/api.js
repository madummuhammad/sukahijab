$(document).ready(function () {
	// kategory
	fetch_category();
	// End of kategory
	// blog
	fetch_blog();
	// End of blog

	// Produk
	fetch_produk();
	// end of produk

	// About Us
	fetch_about_us();
	// End of about us
})

function fetch_category() {
	$.ajax({
		url: "https://sukahijabapi.neosantara.co.id/apimob/category/index",
		type: "GET",
		dataType: "JSON",
		data: JSON.stringify({}),
		success: function (data) {
			for (var i = data['data'].length - 1; i >= 0; i--) {
				$("#tampil_category").append('<div class="item rounded-full h-16 w-14 mb-8 "><img class="rounded-full" src="https://sukahijab.co.id/img/category/s4/' + data['data'][i]['icon'] + '" alt=""><p class="text-xs text-center w-full text-gray-400">' + data['data'][i]['title'] + '</p></div>')
			}
			$('.owl-carousel.category').owlCarousel({
				loop: false,
				margin: 1,
				nav: false,
				responsive: {
					0: {
						items: 5
					},
					600: {
						items: 5
					},
					1000: {
						items: 5
					}
				}
			})
		}
	})
}

function fetch_blog() {
	$.ajax({
		url: "https://sukahijabapi.neosantara.co.id/apimob/blog/index",
		type: "GET",
		dataType: "JSON",
		data: JSON.stringify({}),
		success: function (data) {
			for (var i = data['data'].length - 1; i >= 0; i--) {
				$("#tampil_blog").append('<div data-toggle="modal" data-target="#modal-detil-blog' + data['data'][i]['id'] + '" class="card-blog bg-white p-3 rounded-2xl mb-5"><h2 class="text-grey-500 text-sm justify-items-center font-bold"><i class="fas fa-circle"></i> Blog</h2><img class="rounded-xl mt-2" src="https://sukahijab.co.id/img/page/' + data['data'][i]['cover_img'] + '" alt=""><p class="text-justify">' + data['data'][i]['content'] + '</p><div class="card-blog-footer flex justify-start mt-2"><p>Dec 12, 2020 <i class="fas fa-circle"></i></p><p class="ml-2">Less than a minute</p></div></div>');

				$("#tampil_detil_blog").append('<div id="modal-detil-blog' + data['data'][i]['id'] + '"class="modal-detil-blog fixed bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-pink-200 to-pink-200 z-20"><div class="detil-blog-close blog-header flex items-center mt-5 ml-5 fixed cursor-pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 18.5001L3 10.0001L11.5 1.50012L10 0.00012207L-4.76837e-06 10.0001L10 20.0001L11.5 18.5001Z"fill="#737373" /></svg><h4 class="font-bold pl-5">' + data['data'][i]['title'] + '</h4></div><div class="pembungkus overflow-y-scroll mt-16 top-0 bottom-0 h-full"><div class="pembungkus h-screen"><div class="blog-content mx-4 flex flex-col text-gray-500 overflow-y-scroll pb-32"><div class="card-blog bg-white p-3 rounded-2xl mb-5 relative"><img class="rounded-xl" src="public/img/product/content-1.jpg" alt=""><div class="card-blog-header mt-2"><div class="detil-blog-icon flex justify-between"><div class="icon-left px-3 border-2 border-gray-400 rounded-full flex items-center py-1"><p class="text-sm"><i class="fas fa-circle text-gray-300 text-xs"></i> Promo</p></div><div class="icon-right flex"><div class="icon-view flex items-center"><i class="fas fa-eye"></i><p class="ml-2">2k+</p></div><div class="icon-like flex items-center ml-4"><i class="far fa-heart"></i><p class="ml-2">1k+</p></div></div></div><h2 class="t text-2xl text-black font-bold mb-3">Produk Baru Sukahijab</h2><p class="mb-3">Aug 21, 2021 - Sukahijab</p><div class="detil-blog-keterangan"><p>' + data['data'][i]['content'] + '</p></div></div></div></div></div></div></div>');

				$(".detil-blog-close").on('click', function () {
					$(".modal-detil-blog").removeClass('active');
				});

				var button_modal = $("[data-toggle=modal]");
				for (let i = 0; i < button_modal.length; i++) {
					button_modal[i].onclick = function () {
						var id_target = $(this).data('target');
						$(id_target).addClass('active');
					}
				}
			}

		}
	})
}

function fetch_produk() {
	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}
	$.ajax({
		url: "https://sukahijabapi.neosantara.co.id/apimob/product",
		type: "GET",
		dataType: "JSON",
		data: JSON.stringify({}),
		success: function (data) {
			for (var i = data['data'].length - 1; i >= 0; i--) {
				$("#tampil_produk").append('<div class="h-72 produk bg-white rounded-2xl relative" data-target="#detil-produk' + data['data'][i]['id'] + '" data-toggle="modal"><div class="product-image"><img class="rounded-2xl relative" src="public/img/product/content-1.jpg" alt="asdf"></div><div class="favourite-icon absolute top-1 right-1 bg-white p-2 rounded-full"><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.775 0C16.6611 0 19 2.2973 19 5.51351C19 11.9459 11.875 15.6216 9.5 17C7.125 15.6216 0 11.9459 0 5.51351C0 2.2973 2.375 0 5.225 0C6.992 0 8.55 0.918919 9.5 1.83784C10.45 0.918919 12.008 0 13.775 0Z"fill="#EC2127" /></svg></div><div class="product-description p-3"><div class="product-title text-gray-700">' + data['data'][i]['title'] + '</div><div class="product-price text-pink-600">Rp.' + formatNumber(data['data'][i]['disp_price']) + ' <span class="line-through text-xs text-gray-400">Rp405.000</span></div><div class="product-start content"></div></div></div>');

				$("#tampil_detil_produk").append('<div id="detil-produk' + data['data'][i]['id'] + '"class="detil-produk bottom-0 right-0 left-0 top-0 bg-gray-200 z-20 fixed"><div class="detil-produk-header h-20 fixed right-0 left-0 top-0 bottom-0 flex justify-between px-7 pt-4 z-30"><div class="detil-produk-left"><svg width="19" height="24" viewBox="0 0 19 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM19 10.5L2 10.5V13.5L19 13.5V10.5Z"fill="white" /></svg></div><div class="detil-produk-right text-white"><div class="love grid grid-cols-2 gap-2 text-xl"><i class="fas fa-heart"></i><iclass="fas fa-share-alt"></i></div></div></div><div class="pembungkus-detil-produk overflow-y-scroll h-screen"><div class="detil-produk-content bg-white"><div class="pembungkus overflow-y-hidden"><div class="img-detil-produk left-0 right-0 top-0"><div class="background absolute z-30 left-0 right-0 h-3/4 bg-red-400 hidden"></div><div class="owl-carousel detil-produk-carousel owl-theme rounded-3xl"><img class="rounded-2xl relative"src="public/img/product/content-1.jpg" alt="asdf"><img class="rounded-2xl relative"src="public/img/product/content-1.jpg" alt="asdf"></div></div></div><div class="thumbnail-slide-produk justify-center flex mb-2 mt-2 "><a data-toggle="thumbnail"><imgclass="w-14 rounded-lg border-2 ml-2" src="public/img/product/content-1.jpg" alt=""></a><adata-toggle="thumbnail"><img class="w-14 rounded-lg border-2 ml-2"src="public/img/product/content-1.jpg" alt=""></a></div><div class="detil-produk-title px-5 pb-5"><h2 class="text-red-600 text-2xl font-bold">Rp. ' + formatNumber(data['data'][i]['disp_price']) + '</h2><p class="text-red-500"><span class="text-gray-700 line-through">RP 300.000</span> 49%</p><p>' + data['data'][i]['code'] + ' - ' + data['data'][i]['title'] + '</p><div class="flex justify-between"><div class="rating"><h4>4.7</h4></div><div class="review flex divide-x-2 divide-gray-500"><p class="mr-2">reviews</p><p class="pl-2">' + data['data'][i]['total_bought'] + ' orders</p></div></div></div></div><div class="detil-produk-desktripsi mt-2 bg-white p-5 pb-32"><h2 class="mb-3 font-bold text-black">Desktripsi Produk</h2><h3 class="mb-3 uppercase">' + data['data'][i]['title'] + '</h3><p class="whitespace-pre-line text-sm">' + data['data'][i]['description'] + '</p></div></div><div class="footer-detil-produk absolute z-10 bottom-0 right-0 left-0 h-20 bg-white rounded-t-3xl p-5"><div class="flex justify-between items-center"><a class="text-red-500"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M24.5 22.7501V28.0001C24.3724 27.9272 24.1901 27.8178 23.9531 27.672C23.7161 27.5262 23.224 27.1251 22.4766 26.4689C21.7292 25.8126 20.9818 25.047 20.2344 24.172C19.3411 24.3907 18.4297 24.5001 17.5 24.5001C16.1693 24.5001 14.9434 24.3634 13.8223 24.09C12.7012 23.8165 11.7852 23.4793 11.0742 23.0782C10.3633 22.6772 9.75716 22.2306 9.25586 21.7384C8.75456 21.2462 8.39909 20.7905 8.18945 20.3712C7.97982 19.9519 7.875 19.5782 7.875 19.2501H10.5C12.8516 19.2501 14.9434 18.84 16.7754 18.0197C18.6074 17.1993 20.0612 15.9871 21.1367 14.3829C22.2122 12.7788 22.75 10.9012 22.75 8.75012C26.25 10.5184 28 12.9975 28 16.1876C28 18.7944 26.8333 20.9819 24.5 22.7501ZM10.5 17.5001C9.57031 17.5001 8.65885 17.3907 7.76562 17.172C7.01823 18.047 6.28906 18.8035 5.57812 19.4415C4.86719 20.0795 4.33854 20.4988 3.99219 20.6993L3.5 21.0001V15.7501C1.16667 13.9819 0 11.7944 0 9.18762C0 7.52877 0.469401 5.99296 1.4082 4.5802C2.34701 3.16744 3.62305 2.0509 5.23633 1.23059C6.84961 0.410278 8.60872 0.00012207 10.5137 0.00012207C12.4186 0.00012207 14.1777 0.410278 15.791 1.23059C17.4043 2.0509 18.6758 3.16744 19.6055 4.5802C20.5352 5.99296 21 7.52877 21 9.18762C21 10.8465 20.526 12.3139 19.5781 13.59C18.6302 14.866 17.3633 15.8367 15.7773 16.5021C14.1914 17.1674 12.4323 17.5001 10.5 17.5001ZM10.5 1.75012C8.91406 1.75012 7.45117 2.06002 6.11133 2.67981C4.77148 3.2996 3.70964 4.14726 2.92578 5.22278C2.14193 6.2983 1.75 7.46952 1.75 8.73645C1.75 10.0034 2.14193 11.1746 2.92578 12.2501C3.70964 13.3256 4.77148 14.1779 6.11133 14.8068C7.45117 15.4357 8.91406 15.7501 10.5 15.7501C12.0859 15.7501 13.5488 15.4357 14.8887 14.8068C16.2285 14.1779 17.2904 13.3256 18.0742 12.2501C18.8581 11.1746 19.25 10.0034 19.25 8.73645C19.25 7.46952 18.8581 6.2983 18.0742 5.22278C17.2904 4.14726 16.2285 3.2996 14.8887 2.67981C13.5488 2.06002 12.0859 1.75012 10.5 1.75012Z"fill="#e83c3c" /></svg></a><div class="keranjang flex relative"><a data-toggle="modal" data-target="#footer-detil-produk-tambah-keranjang' + data['data'][i]['id'] + '" class="text-red-600 text-3xl"><i class="fas fa-cart-plus"></i></a><div class="lingkaran bg-red-600 rounded-full h-6 w-6 text-center absolute ml-6 border border-white -mt-2"><span class="text-white">2</span></div></div><a data-toggle="modal" data-target="#footer-detil-produk-beli-sekarang' + data['data'][i]['id'] + '" class="text-sm text-white bg-red-600 w-9/12 rounded-full text-center py-3 shadow-button">Beli Sekarang</a></div></div><div class="background fixed bottom-0 top-0 left-0 right-0 bg-black opacity-30 z-30"></div><div id="footer-detil-produk-beli-sekarang' + data['data'][i]['id'] + '" class="footer-detil-produk-beli-sekarang fixed left-0 right-0 bottom-0 z-30"><div class="bg-white absolute bottom-0 left-0 right-0 p-6 rounded-3xl"><div class="footer-detil-produk-bs-close flex justify-end"><h2 class="text-2xl text-gray-400"><i class="fas fa-times-circle"></i></h2></div><div class="header flex justify-start"><img class="h-24 rounded-lg mr-3" src="public/img/product/content-1.jpg" alt=""><div class="keterangan"><p>' + data['data'][i]['code'] + ' - ' + data['data'][i]['title'] + '</p><h2 class="font-bold text-red-600">Rp. 200.000</h2><p class="text-red-600"><span class="line-through text-gray-500">Rp 300.000</span> 49%</p></div></div><div class="warna my-2 text-red-500"><p class="my-1 text-black">Pilih Warna</p><div class="flex grid grid-cols-3 gap-2 justify-between text-center items-center"><div class="group border border-red-400 rounded-md"><label data-toggle="check_warna" id for="warna1" class="px-7 py-1">Merah</label><input class="hidden" type="radio" id="warna1" name="warna"></div><div class="group border border-red-400 rounded-md"><label data-toggle="check_warna" for="warna2" class="px-7 py-1">Biru</label><input class="hidden" id="warna2" type="radio" name="warna"></div><div class="group border border-red-400 rounded-md "><label data-toggle="check_warna" for="warna3" class="px-7 py-1">Hijau</label><input class="hidden" id="warna3" type="radio" name="warna"></div><div class="group  border border-red-400 rounded-md "><label data-toggle="check_warna" for="warna4" class="px-7 py-1">Ungu</label><input class="hidden" id="warna4" type="radio" name="warna"></div></div></div><div class="ukuran my-2 text-red-500"><p class="my-1 text-black">Ukuran</p><div class="flex grid grid-cols-3 gap-2 justify-between text-center items-center"><div class="group border border-red-400 rounded-md"><label data-toggle="check_ukuran" id for="ukuran1" class="px-7 py-1">M</label><input class="hidden" type="radio" id="ukuran1" name="ukuran"></div><div class="group border border-red-400 rounded-md"><label data-toggle="check_ukuran" for="ukuran2" class="px-7 py-1">L</label><input class="hidden" id="ukuran2" type="radio" name="ukuran"></div><div class="group border border-red-400 rounded-md "><label data-toggle="check_ukuran" for="ukuran3" class="px-7 py-1">XL</label><input class="hidden" id="ukuran3" type="radio" name="ukuran"></div><div class="group  border border-red-400 rounded-md "><label data-toggle="check_ukuran" for="ukuran4" class="px-7 py-1">XXL</label><input class="hidden" id="ukuran4" type="radio" name="ukuran"></div></div></div><div class="quantity flex justify-start my-2"><div class="label mr-2"><p>Quantity</p></div><div class="adding flex justify-start w-2/12"><button data-action="decrement" class=" w-20 rounded-l cursor-pointer outline-none text-red-600"><span class="m-auto font-thin"></span><i class="fas fa-minus-circle"></i></button><input type="number"class="outline-none focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center bg-white"name="custom-input-number" value="0" disabled><button data-action="increment" class="h-full w-20 cursor-pointer text-red-600"><span class="m-auto font-thin text-center"></span><i class="fas fa-plus-circle"></i></button></div></div><div class="total flex justify-between my-2"><p>Total</p><h2 class="text-red-500 font-bold">Rp. 200.000</h2></div><div class="button flex w-full"><a class="bg-red-500 shadow-button w-full text-center text-white py-2 rounded-full">Beli Sekarang</a></div></div></div><div id="footer-detil-produk-tambah-keranjang' + data['data'][i]['id'] + '"class="footer-detil-produk-tambah-keranjang fixed left-0 right-0 bottom-0 z-30"><div class="bg-white absolute bottom-0 left-0 right-0 p-6 rounded-3xl"><div class="footer-detil-produk-tk-close flex justify-end"><h2 class="text-2xl text-gray-400"><i class="fas fa-times-circle"></i></h2></div><div class="header flex justify-start"><img class="h-24 rounded-lg mr-3" src="public/img/product/content-1.jpg" alt=""><div class="keterangan"><p>' + data['data'][i]['code'] + ' - ' + data['data'][i]['title'] + '</p><h2 class="font-bold text-red-600">Rp. 200.000</h2><p class="text-red-600"><span class="line-through text-gray-500">Rp 300.000</span> 49%</p></div></div><div class="warna my-2 text-red-500"><p class="my-1 text-black">Pilih Warna</p><div class="flex grid grid-cols-3 gap-2 justify-between text-center items-center"><div class="group border border-red-400 rounded-md"><label data-toggle="check_warna" id for="warna1" class="px-7 py-1">Merah</label><input class="hidden" type="radio" id="warna1" name="warna"></div><div class="group border border-red-400 rounded-md"><label data-toggle="check_warna" for="warna2" class="px-7 py-1">Biru</label><input class="hidden" id="warna2" type="radio" name="warna"></div><div class="group border border-red-400 rounded-md "><label data-toggle="check_warna" for="warna3" class="px-7 py-1">Hijau</label><input class="hidden" id="warna3" type="radio" name="warna"></div><div class="group  border border-red-400 rounded-md "><label data-toggle="check_warna" for="warna4" class="px-7 py-1">Ungu</label><input class="hidden" id="warna4" type="radio" name="warna"></div></div></div><div class="ukuran my-2 text-red-500"><p class="my-1 text-black">Ukuran</p><div class="flex grid grid-cols-3 gap-2 justify-between text-center items-center"><div class="group border border-red-400 rounded-md"><label data-toggle="check_ukuran" id for="ukuran1" class="px-7 py-1">M</label><input class="hidden" type="radio" id="ukuran1" name="ukuran"></div><div class="group border border-red-400 rounded-md"><label data-toggle="check_ukuran" for="ukuran2" class="px-7 py-1">L</label><input class="hidden" id="ukuran2" type="radio" name="ukuran"></div><div class="group border border-red-400 rounded-md "><label data-toggle="check_ukuran" for="ukuran3" class="px-7 py-1">XL</label><input class="hidden" id="ukuran3" type="radio" name="ukuran"></div><div class="group  border border-red-400 rounded-md "><label data-toggle="check_ukuran" for="ukuran4" class="px-7 py-1">XXL</label><input class="hidden" id="ukuran4" type="radio" name="ukuran"></div></div></div><div class="quantity flex justify-start my-2"><div class="label mr-2"><p>Quantity</p></div><div class="adding flex justify-start w-2/12"><button data-action="decrement" class=" w-20 rounded-l cursor-pointer outline-none text-red-600"><span class="m-auto font-thin"></span><i class="fas fa-minus-circle"></i></button><input type="number"class="outline-none focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center bg-white"name="custom-input-number" value="0" disabled><button data-action="increment" class="h-full w-20 cursor-pointer text-red-600"><span class="m-auto font-thin text-center"></span><i class="fas fa-plus-circle"></i></button></div></div><div class="total flex justify-between my-2"><p>Total</p><h2 class="text-red-500 font-bold">Rp. 200.000</h2></div><div class="button flex w-full"><a class="bg-red-500 shadow-button w-full text-center text-white py-2 rounded-full">Tambah Keranjang</a></div></div></div></div>')

				$('.owl-carousel.detil-produk-carousel').owlCarousel({
					loop: false,
					margin: 10,
					nav: false,
					dots: ["<img src='public/img/product/content-1.jpg'>", "<img src='nextArrow.png'>"],
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 3
						},
						1000: {
							items: 5
						}
					}
				})

				$(".detil-produk-left").on('click', function () {
					$(".detil-produk").removeClass('active');
				});


				var owl = $('.owl-carousel.detil-produk-carousel');
				var thumbnail = $("[data-toggle=thumbnail]");
				for (let i = 0; i < thumbnail.length; i++) {
					thumbnail[i].onclick = function () {
						owl.trigger('to.owl.carousel', [i]);
					}
				}

				$(".footer-detil-produk-bs-close").on('click', function () {
					$(".footer-detil-produk-beli-sekarang").removeClass('active');
					$(".detil-produk.active .background").removeClass('active');
				})

				$(".footer-detil-produk-tk-close").on('click', function () {
					$(".footer-detil-produk-tambah-keranjang").removeClass('active');
					$(".detil-produk.active .background").removeClass('active');
				})

				$(".detil-produk .background").on('click', function () {
					$(".footer-detil-produk-tambah-keranjang").removeClass('active');
					$(".detil-produk.active .background").removeClass('active');
				});

				$(".detil-produk.active [data-toggle=modal]").on('click', function () {
					$(".detil-produk.active .background").addClass('active');
				});

				var cek_warna = $("[data-toggle=check_warna]");
				for (let i = 0; i < cek_warna.length; i++) {
					cek_warna[i].onclick = function () {
						$(".warna .group").removeClass('active bg-red-400 text-white');
						$(this).parent().addClass('active bg-red-400 text-white');
					}
				}

				var cek_ukuran = $("[data-toggle=check_ukuran]");
				for (let i = 0; i < cek_ukuran.length; i++) {
					cek_ukuran[i].onclick = function () {
						$(".ukuran .group.active").removeClass('active bg-red-400 text-white');
						$(this).parent().addClass('active bg-red-400 text-white');
					}
				}

				var button_modal = $("[data-toggle=modal]");
				for (let i = 0; i < button_modal.length; i++) {
					button_modal[i].onclick = function () {
						var id_target = $(this).data('target');
						$(id_target).addClass('active');
					}
				}

				function decrement(e) {
					const btn = e.target.parentNode.parentElement.querySelector(
						'button[data-action="decrement"]'
					);
					const target = btn.nextElementSibling;
					let value = Number(target.value);
					value--;
					if (value < 0) {
						value = 0
						target.value = value;
					} else {
						target.value = value;
					}

				}

				function increment(e) {
					const btn = e.target.parentNode.parentElement.querySelector(
						'button[data-action="decrement"]'
					);
					const target = btn.nextElementSibling;
					let value = Number(target.value);
					value++;
					target.value = value;
				}

				const decrementButtons = document.querySelectorAll(
					`button[data-action="decrement"]`
				);

				const incrementButtons = document.querySelectorAll(
					`button[data-action="increment"]`
				);

				decrementButtons.forEach(btn => {
					btn.addEventListener("click", decrement);
				});

				incrementButtons.forEach(btn => {
					btn.addEventListener("click", increment);
				});
			}
		}
	})
}

function fetch_about_us() {
	$.ajax({
		url: "https://sukahijabapi.neosantara.co.id/apimob/page/about_us",
		type: "GET",
		dataType: "JSON",
		data: JSON.stringify({}),
		success: function (data) {
			for (var i = data['data'].length - 1; i >= 0; i--) {
				$("#tampil_tentang_kami").append('<div id="modal-tentang-kami"class="fixed bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-pink-200 to-pink-200 z-20"><div id="tentang-kami-close" class="tentang-kami-header flex items-center mt-5 ml-5 fixed cursor-pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 18.5001L3 10.0001L11.5 1.50012L10 0.00012207L-4.76837e-06 10.0001L10 20.0001L11.5 18.5001Z"fill="#737373" /></svg><h4 class="pl-5">Tentang Sukahijab</h4></div><div class="pembungkus overflow-y-scroll mt-16 top-0 bottom-0 h-full"><div class="pembungkus h-screen"><div class="tentang-kami-content mx-5 flex flex-col overflow-y-scroll pb-32"><div class="card-tentang-kami bg-white rounded-2xl mb-5 pb-4 p-4"><div class="tentang-kami-img bg-red-600 rounded-2xl mb-4"><img class="rounded-xl" src="public/img/logo.png" alt=""></div><h2 class="text-lg font-bold text-center">Sukahijab</h2><p class="text-sm text-center">v 4.0.0</p><div class="mt-4 text-sm capitalize whitespace-pre-line">' + data['data'] + '</div></div></div></div></div></div>')
				$("#tentang-kami-close").on('click', function () {
					$("#modal-tentang-kami").removeClass('active');
				});
			}
		}
	})
}