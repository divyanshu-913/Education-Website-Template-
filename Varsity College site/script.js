$(document).ready(
    function () {
        $(".sub-home-active ,#all-courses ,#blog, #pages").hover
            (function () {
                $("#sub-home").show(500);
            })

        $(".sub-home-active,#all-courses ,#blog, #pages").mouseleave
            (function () {
                $("#sub-home").hide(500);
            })
    }
)

$(document).ready(function () {
    let current = 0;
    let slides = $('.slide');
    let total = slides.length;

    setInterval(function () {
        slides.eq(current).removeClass('active');
        current = (current + 1) % total;
        slides.eq(current).addClass('active');
    }, 5000);

    $(".nav-right").click(function () {
        slides.eq(current).removeClass('active'); 
        current = (current + 1) % total;           
        slides.eq(current).addClass('active');     
   });

   $(".nav-left").click(function () {
        slides.eq(current).removeClass('active'); 
        current = (current + 1) % total;           
        slides.eq(current).addClass('active');     
    });
});


/*let currentIndex = 0;
  let slides = $('#slider .slides img');
  let totalSlides = slides.length;

  function showSlide(index) {
    slides.removeClass('active').fadeOut(500);
    slides.eq(index).addClass('active').fadeIn(500);
  }

  $('#next').click(function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  $('#prev').click(function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  // Show first slide initially
  showSlide(currentIndex);
  
  */