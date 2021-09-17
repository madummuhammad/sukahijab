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

    // Input provinsi

    $("#input-provinsi").on('click', function () {
         $("#checkout-option-provinsi .checkout-option-background").addClass('active');

         $("#checkout-option-provinsi .pembungkus-checkout-option").addClass('active');

         $("#checkout-option-provinsi .checkout-option-footer p").on('click', function () {
              var value = $(this).html();

              $("#input-provinsi input").val(value);
              $("#checkout-option-provinsi .checkout-option-background").removeClass('active');


              $("#checkout-option-provinsi .pembungkus-checkout-option").removeClass('active');

         })


         $("#option-close-provinsi").on('click', function () {
              $("#input-provinsi input").val("");
              $("#input-provinsi input").addClass('border-red-600 pb-8 text-xs placeholder-red-500');
              $("#input-provinsi p").addClass('text-red-600');
         });

         $("#input-provinsi input").removeClass('border-red-600 pb-8 text-xs placeholder-red-500');

         $("#input-provinsi p").removeClass('text-red-600');

         $("#checkout-option-provinsi .checkout-option-background").on('click', function () {
              if ($("#input-provinsi input").val().length == 0) {
                   $("#input-provinsi input").val("");
                   $("#input-provinsi input").addClass('border-red-600 pb-8 text-xs placeholder-red-500');
                   $("#input-provinsi p").addClass('text-red-600');
              }

         });

    });

    $("#checkout-option-provinsi .checkout-option-background").on('click', function () {
         $(this).removeClass('active');
         $("#checkout-option-provinsi .pembungkus-checkout-option").removeClass('active');
    });

    $("#option-close-provinsi").on('click', function () {
         $("#checkout-option-provinsi .checkout-option-background").removeClass('active');


         $("#checkout-option-provinsi .pembungkus-checkout-option").removeClass('active');
    });
    //  End of input provinsi


    //     Input kota
    $("#input-kota").on('click', function () {
         $("#checkout-option-kota .checkout-option-background").addClass('active');

         $("#checkout-option-kota .pembungkus-checkout-option").addClass('active');

         $("#checkout-option-kota .checkout-option-footer p").on('click', function () {
              var value = $(this).html();

              $("#input-kota input").val(value);
              $("#checkout-option-kota .checkout-option-background").removeClass('active');


              $("#checkout-option-kota .pembungkus-checkout-option").removeClass('active');

         })


         $("#option-close-kota").on('click', function () {
              $("#input-kota input").val("");
              $("#input-kota input").addClass('border-red-600 pb-8 text-xs placeholder-red-500');
              $("#input-kota p").addClass('text-red-600');
         });

         $("#input-kota input").removeClass('border-red-600 pb-8 text-xs placeholder-red-500');

         $("#input-kota p").removeClass('text-red-600');

         $("#checkout-option-kota .checkout-option-background").on('click', function () {
              if ($("#input-kota input").val().length == 0) {
                   $("#input-kota input").val("");
                   $("#input-kota input").addClass('border-red-600 pb-8 text-xs placeholder-red-500');
                   $("#input-kota p").addClass('text-red-600');
              }

         });

    });

    $("#checkout-option-kota .checkout-option-background").on('click', function () {
         $(this).removeClass('active');
         $("#checkout-option-kota .pembungkus-checkout-option").removeClass('active');
    });

    $("#option-close-kota").on('click', function () {
         $("#checkout-option-kota .checkout-option-background").removeClass('active');


         $("#checkout-option-kota .pembungkus-checkout-option").removeClass('active');
    });
    // End of input kota

    //     Input kecamatan

    $("#input-kecamatan").on('click', function () {
         $("#checkout-option-kecamatan .checkout-option-background").addClass('active');

         $("#checkout-option-kecamatan .pembungkus-checkout-option").addClass('active');

         $("#checkout-option-kecamatan .checkout-option-footer p").on('click', function () {
              var value = $(this).html();

              $("#input-kecamatan input").val(value);
              $("#checkout-option-kecamatan .checkout-option-background").removeClass('active');


              $("#checkout-option-kecamatan .pembungkus-checkout-option").removeClass('active');

         })


         $("#option-close-kecamatan").on('click', function () {
              $("#input-kecamatan input").val("");
              $("#input-kecamatan input").addClass('border-red-600 pb-8 text-xs placeholder-red-500');
              $("#input-kecamatan p").addClass('text-red-600');
         });

         $("#input-kecamatan input").removeClass('border-red-600 pb-8 text-xs placeholder-red-500');

         $("#input-kecamatan p").removeClass('text-red-600');

         $("#checkout-option-kecamatan .checkout-option-background").on('click', function () {
              if ($("#input-kecamatan input").val().length == 0) {
                   $("#input-kecamatan input").val("");
                   $("#input-kecamatan input").addClass('border-red-600 pb-8 text-xs placeholder-red-500');
                   $("#input-kecamatan p").addClass('text-red-600');
              }

         });

    });

    $("#checkout-option-kecamatan .checkout-option-background").on('click', function () {
         $(this).removeClass('active');
         $("#checkout-option-kecamatan .pembungkus-checkout-option").removeClass('active');
    });

    $("#option-close-kecamatan").on('click', function () {
         $("#checkout-option-kecamatan .checkout-option-background").removeClass('active');


         $("#checkout-option-kecamatan .pembungkus-checkout-option").removeClass('active');
    });
    // End of input kecamatan

    //     Input kode pos
    $("#input-kode-pos").on('click', function () {
         $("#input-kode-pos label").addClass('pb-10 text-red-500 text-xs');
         $("#input-kode-pos input").addClass('border-red-500');
         $("#input-kode-pos input").on('keyup', function () {
              $(this).on('keyup', function () {
                   if ($(this).val().length > 0) {
                        $(this).removeClass('border-red-500');
                        $("#input-kode-pos label").removeClass('text-red-500');
                   } else {
                        $("#input-kode-pos input").addClass('border-red-500');
                        $("#input-kode-pos label").addClass('text-red-500');
                   }
              })
         })
    })

    // End of input kode pos

    //     Input alamat lengkap
    $("#input-checkout-alamat").on('click', function () {
         $("#input-checkout-alamat label").addClass('pb-10 text-red-500 text-xs');
         $("#input-checkout-alamat input").addClass('border-red-500');
         $("#input-checkout-alamat input").on('keyup', function () {
              $(this).on('keyup', function () {
                   if ($(this).val().length > 0) {
                        $(this).removeClass('border-red-500');
                        $("#input-checkout-alamat label").removeClass('text-red-500');
                   } else {
                        $("#input-checkout-alamat input").addClass('border-red-500');
                        $("#input-checkout-alamat label").addClass('text-red-500');
                   }
              })
         })
    })
    // End of input alamat lengkap

    //     Pembayaran
    $("#open-pembayaran").on('click', function () {
         $("#modal-pembayaran").addClass('active');
    });
    $("#pembayaran-close").on('click', function () {
         $("#modal-pembayaran").removeClass('active');
    });
    // End of pembayaran

    //     Preview
    $("#open-preview").on('click', function () {
         $("#modal-preview").addClass('active');
    });
    $("#preview-close").on('click', function () {
         $("#modal-preview").removeClass('active');
    });
    // End of preview


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