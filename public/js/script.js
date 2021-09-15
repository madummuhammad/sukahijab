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

    $("#cek-ongkir").on('click',function(){
         $("#modal-cek-ongkir").addClass('active');
    });
    $("#cek-ongkir-close").on('click',function(){
         $("#modal-cek-ongkir").removeClass('active');
    });

    //     $(".slides").on('scroll', function () {

    //     })
