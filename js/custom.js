$(function () {


   const mainVisualSlide = new Swiper('.main_visual_slide',  {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 1000,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
    });

    const mainContentSlide = new Swiper('.main_content_slide',{
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
    
        pagination: {
          el: '.main_content .page',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        navigation: {
          nextEl: '.main_content .arrows .prev',
          prevEl: '.main_content .arrows .next',
        },
        
      }
    );

    const newContentSlide = new Swiper('.new_content_slide',{
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
  
      pagination: {
        el: '.new_content .page',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      navigation: {
        nextEl: '.new_content .arrows .prev',
        prevEl: '.new_content .arrows .next',
      },
    
    } 
    );

    AOS.init();
    
      
})