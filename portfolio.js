$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
           $('.navbar').addClass("start");
        }else{
            $('.navbar').removeClass("start");
       } 
       if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
       }else{
        $('.scroll-up-btn').removeClass("show");
       }
    });

    //slide-up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toogle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    function cambiarIdioma(idioma) {
        if (idioma === 'es') {
          location.href = 'main.html';  
        } else if (idioma === 'en') {
          location.href = 'index.html';  
        }
      }
      

    // owl carousel script
    $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Fullstack", "Freelancer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Fullstack", "Freelancer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
