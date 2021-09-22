$(document).ready(function () {
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
	$.ajax({
		url: "https://sukahijabapi.neosantara.co.id/apimob/product",
		type: "GET",
		dataType: "JSON",
		data: JSON.stringify({}),
		success: function (data) {
			for (var i = data['data'].length - 1; i >= 0; i--) {
				$("#tampil_produk").append('<div class="h-72 produk bg-white rounded-2xl relative" data-target="#detil-produk' + data['data'][i]['id'] + '" data-toggle="modal"><div class="product-image"><img class="rounded-2xl relative" src="public/img/product/content-1.jpg" alt="asdf"></div><div class="favourite-icon absolute top-1 right-1 bg-white p-2 rounded-full"><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.775 0C16.6611 0 19 2.2973 19 5.51351C19 11.9459 11.875 15.6216 9.5 17C7.125 15.6216 0 11.9459 0 5.51351C0 2.2973 2.375 0 5.225 0C6.992 0 8.55 0.918919 9.5 1.83784C10.45 0.918919 12.008 0 13.775 0Z"fill="#EC2127" /></svg></div><div class="product-description p-3"><div class="product-title text-gray-700">' + data['data'][i]['title'] + '</div><div class="product-price text-pink-600">Rp.' + data['data'][i]['disp_price'] + ' <span class="line-through text-xs text-gray-400">Rp405.000</span></div><div class="product-start content"></div></div></div>');

				$("#tampil_detil_produk").append('<div id="detil-produk' + data['data'][i]['id'] + '" class="detil-produk bottom-0 right-0 left-0 top-0 bg-gray-200 z-20 fixed"><div class="detil-produk-header h-20 fixed right-0 left-0 top-0 bottom-0 flex justify-between px-7 pt-4 z-30"><div class="detil-produk-left"><svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM19 10.5L2 10.5V13.5L19 13.5V10.5Z"fill="white" /></svg></div><div class="detil-produk-right text-white"><div class="love grid grid-cols-2 gap-2 text-xl"><i class="fas fa-heart"></i><i class="fas fa-share-alt"></i></div></div></div><div class="pembungkus-detil-produk overflow-y-scroll h-screen"><div class="detil-produk-content bg-white"><div class="pembungkus overflow-y-hidden"><div class="img-detil-produk left-0 right-0 top-0"><div class="background absolute z-30 left-0 right-0 h-3/4 bg-red-400 hidden"></div><div class="owl-carousel detil-produk-carousel owl-theme rounded-3xl"><img class="rounded-2xl relative" src="public/img/product/content-1.jpg" alt="asdf"><img class="rounded-2xl relative" src="public/img/product/content-1.jpg" alt="asdf"></div></div></div><div class="thumbnail-slide-produk justify-center flex mb-2 mt-2 "><a data-toggle="thumbnail"><img class="w-14 rounded-lg border-2 ml-2" src="public/img/product/content-1.jpg" alt=""></a><a data-toggle="thumbnail"><img class="w-14 rounded-lg border-2 ml-2" src="public/img/product/content-1.jpg" alt=""></a></div><div class="detil-produk-title px-5 pb-5"><h2 class="text-red-600 text-2xl">Rp. ' + data['data'][i]['disp_price'] + '</h2><p class="text-red-500"><span class="text-gray-700 line-through">RP 300.000</span> 49%</p><p>' + data['data'][i]['code'] + ' - ' + data['data'][i]['title'] + '</p><div class="flex justify-between"><div class="rating"><h4>4.7</h4></div><div class="review flex divide-x-2 divide-gray-500"><p class="mr-2">reviews</p><p class="pl-2">' + data['data'][i]['total_bought'] + ' orders</p></div></div></div></div><div class="detil-produk-desktripsi mt-2 bg-white p-5 "><h2 class="mb-3">Desktripsi Produk</h2><h3 class="mb-3 uppercase">' + data['data'][i]['title'] + '</h3><p>' + data['data'][i]['description'] + '</p></div></div></div>')

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

function fetch_about_us() {
	$.ajax({
		url: "https://sukahijabapi.neosantara.co.id/apimob/page/about_us",
		type: "GET",
		dataType: "JSON",
		data: JSON.stringify({}),
		success: function (data) {
			for (var i = data['data'].length - 1; i >= 0; i--) {
				$("#tampil_tentang_kami").append('<div id="modal-tentang-kami"class="fixed bottom-0 right-0 left-0 top-0 bg-gradient-to-br from-pink-200 to-pink-200 z-20"><div id="tentang-kami-close" class="tentang-kami-header flex items-center mt-5 ml-5 fixed cursor-pointer"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 18.5001L3 10.0001L11.5 1.50012L10 0.00012207L-4.76837e-06 10.0001L10 20.0001L11.5 18.5001Z"fill="#737373" /></svg><h4 class="pl-5">Tentang Sukahijab</h4></div><div class="pembungkus overflow-y-scroll mt-16 top-0 bottom-0 h-full"><div class="pembungkus h-screen"><div class="tentang-kami-content mx-5 flex flex-col overflow-y-scroll pb-32"><div class="card-tentang-kami bg-white rounded-2xl mb-5 pb-4 p-4"><div class="tentang-kami-img bg-red-600 rounded-2xl mb-4"><img class="rounded-xl" src="public/img/logo.png" alt=""></div><h2 class="text-lg font-bold text-center">Sukahijab</h2><p class="text-sm text-center">v 4.0.0</p><div class="mt-4 text-sm text-justify">' + data['data'] + '</div></div></div></div></div></div>')
				$("#tentang-kami-close").on('click', function () {
					$("#modal-tentang-kami").removeClass('active');
				});
			}
		}
	})
}