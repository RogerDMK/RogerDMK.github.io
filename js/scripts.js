/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener("load", (event) => {
    let windowPlace = $(window).scrollTop() + 250;
    if(windowPlace <= $('#education').offset().top) {
        imageProfile.src = "assets/img/profile.jpg";
    }
    else if(windowPlace <= $('#experience').offset().top) {
        imageProfile.src = "assets/img/educ.jpg";
    }
    else if(windowPlace <= $('#skills').offset().top) {
        imageProfile.src = "assets/img/dino2.jpg";
    }
    else if(windowPlace <= $('#interests').offset().top) {
        imageProfile.src = "assets/img/turtle2.jpg";
    }
    else if(windowPlace <= $('#awards').offset().top) {
        imageProfile.src = "assets/img/hiking.jpg";
    }
    else{
        imageProfile.src = "assets/img/ConstructionMe.png";
    }
  });

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var imageProfile = document.getElementById("profile-image");
$(window).bind('scroll', function() {
    let windowPlace = $(window).scrollTop() + 250;
    if(windowPlace <= $('#education').offset().top) {
        imageProfile.src = "assets/img/profile.jpg";
    }
    else if(windowPlace <= $('#experience').offset().top) {
        imageProfile.src = "assets/img/educ.jpg";
    }
    else if(windowPlace <= $('#skills').offset().top) {
        imageProfile.src = "assets/img/dino2.jpg";
    }
    else if(windowPlace <= $('#interests').offset().top) {
        imageProfile.src = "assets/img/turtle2.jpg";
    }
    else if(windowPlace <= $('#awards').offset().top) {
        imageProfile.src = "assets/img/hiking.jpg";
    }
    else{
        imageProfile.src = "assets/img/ConstructionMe.png";
    }
});
