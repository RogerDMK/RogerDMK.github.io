/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

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
    if($(window).scrollTop() <= $('#about').offset().top) {
        imageProfile.src = "assets/img/profile.jpg";
        console.log("About");
    }
    else if($(window).scrollTop() <= $('#experience').offset().top) {
        imageProfile.src = "assets/img/profile.jpg";
        console.log("Experience");
    }
    else if($(window).scrollTop() <= $('#education').offset().top) {
        imageProfile.src = "assets/img/ConstructionMe.png";
        console.log("Education");
    }
    else if($(window).scrollTop() <= $('#skills').offset().top) {
        imageProfile.src = "assets/img/profile.jpg";
        console.log("Skills");
    }
    else if($(window).scrollTop() <= $('#interests').offset().top) {
        imageProfile.src = "assets/img/profile.jpg";
        console.log("Interests");
    }
    else{
        imageProfile.src = "assets/img/ConstructionMe.png";
        console.log("FunStuff");
    }
});
