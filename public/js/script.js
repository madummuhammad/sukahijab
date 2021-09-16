    $('.owl-carousel.banner').owlCarousel({
         loop: true,
         margin: 10,
         nav: false,
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

    $('.owl-carousel.category').owlCarousel({
         loop: false,
         margin: 10,
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
    });

    $('.owl-carousel.detil-produk-carousel').owlCarousel({
         loop: false,
         margin: 10,
         nav: false,
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

    $("#button-profile").on('click', function () {
         $("#profile").addClass("active");
         $("#content-profile").addClass("active");
    })


    $("#button-close").on('click', function () {
         $("#profile").removeClass("active");
         $("#content-profile").removeClass("active");
    })


    $(".produk").on('click', function () {
         let target = $(".produk").data('target');
         //     alert(target);
         //     $(target).addClass('active');

    });

    // Cek Ongkir
    $("#cek-ongkir").on('click', function () {
         $("#modal-cek-ongkir").addClass('active');
    });
    $("#cek-ongkir-close").on('click', function () {
         $("#modal-cek-ongkir").removeClass('active');
    });


    // Promo
    $("#open-promo").on('click', function () {
         $("#modal-promo").addClass('active');
    });
    $("#promo-close").on('click', function () {
         $("#modal-promo").removeClass('active');
    });


    // Blog
    $("#open-blog").on('click', function () {
         $("#modal-blog").addClass('active');
    });
    $("#blog-close").on('click', function () {
         $("#modal-blog").removeClass('active');
    });


    //     Konfirmasi Pembayaran
    $("#open-konfirmasi-pembayaran").on('click', function () {
         $("#modal-konfirmasi-pembayaran").addClass('active');
    });
    $("#konfirmasi-pembayaran-close").on('click', function () {
         $("#modal-konfirmasi-pembayaran").removeClass('active');
    });


    //  Cara order
    $("#open-cara-order").on('click', function () {
         $("#modal-cara-order").addClass('active');
    });
    $("#cara-order-close").on('click', function () {
         $("#modal-cara-order").removeClass('active');
    });

    //     Join Reseller
    $("#open-join-reseller").on('click', function () {
         $("#modal-join-reseller").addClass('active');
    });
    $("#join-reseller-close").on('click', function () {
         $("#modal-join-reseller").removeClass('active');
    });

    //     Testimoni
    $("#open-testimoni").on('click', function () {
         $("#modal-testimoni").addClass('active');
    });
    $("#testimoni-close").on('click', function () {
         $("#modal-testimoni").removeClass('active');
    });

    //     Tentang kami
    $("#open-tentang-kami").on('click', function () {
         $("#modal-tentang-kami").addClass('active');
    });
    $("#tentang-kami-close").on('click', function () {
         $("#modal-tentang-kami").removeClass('active');
    });

    //     Menunggu Pembayaran
    $("#open-menunggu-pembayaran").on('click', function () {
         $("#modal-menunggu-pembayaran").addClass('active');
    });
    $("#menunggu-pembayaran-close").on('click', function () {
         $("#modal-menunggu-pembayaran").removeClass('active');
    });

    //     cart

    $("#open-cart").on('click', function () {
         $("#modal-cart").addClass('active');
    });
    $("#cart-close").on('click', function () {
         $("#modal-cart").removeClass('active');
    });

    //     Checkout
    $("#open-checkout").on('click', function () {
         $("#modal-checkout").addClass('active');
    });
    $("#checkout-close").on('click', function () {
         $("#modal-checkout").removeClass('active');
    });
    $("#input-provinsi").on('click', function () {
         $("#checkout-option-provinsi .checkout-option-background").addClass('active');

         $("#checkout-option-provinsi .pembungkus-checkout-option").addClass('active');
    });
    $("#option-close").on('click', function () {
         $("#checkout-option-provinsi .checkout-option-background").removeClass('active');

         $("#checkout-option-provinsi .pembungkus-checkout-option").removeClass('active');
    });



    //     $(document).ready(function () {
    //          jml_cartadding = $('.cart-adding').length;
    //          for (let i = 0; i < jml_cartadding; i++) {
    //               $('.cart-adding').slice(i).addClass('cuk' + i);
    //          }
    //     })

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





    //     $(".slides").on('scroll', function () {

    //     })