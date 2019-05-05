$(document).ready(function () {

    $('#element-to-animate0').css('opacity', 0);
    $('#element-to-animate0').waypoint(function () {
        $('#element-to-animate0').addClass('fadeInUp');
    }, { offset: '70%' });

    // $('#element-to-animate1').css('opacity', 0);
    // $('#element-to-animate1').waypoint(function () {
    //     $('#element-to-animate1').addClass('fadeInUp');
    // }, { offset: '90%' });

    // $('#element-to-animate2').css('opacity', 0);
    // $('#element-to-animate2').waypoint(function () {
    //     $('#element-to-animate2').addClass('fadeInUp');
    // }, { offset: '90%' });

    var alterClassTablet = function () {
        var ww = document.body.clientWidth;
        if (ww < 1000) {
            $('.tech-icon').removeClass('fa-3x');
            $('.add-wrapper').addClass('wrapper');
        } else {
            $('.tech-icon').addClass('fa-3x');
            $('.add-wrapper').removeClass('wrapper');
        };
    };
    $(window).resize(function () {
        alterClassTablet();
    });

    var alterClassDesktop = function () {
        var ww = document.body.clientWidth;
        if (ww <= 1200) {
            $('.project-wrapper').removeClass('wrapper');
        } else {
            $('.project-wrapper').addClass('wrapper');
        };
    };
    $(window).resize(function () {
        alterClassDesktop();
    });

    (function() {
      var hamburger = {
        navToggle: document.querySelector(".nav-toggle"),
        nav: document.querySelector("nav"),

        doToggle: function(e) {
          e.preventDefault();
          this.navToggle.classList.toggle("expanded");
          this.nav.classList.toggle("expanded");
        }
      };

      hamburger.navToggle.addEventListener("click", function(e) {
        hamburger.doToggle(e);
      });
    //   hamburger.nav.addEventListener("click", function(e) {
    //     hamburger.doToggle(e);
    //   });
    })();


    alterClassTablet();
    alterClassDesktop();

})