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


    /* resize the image(s) on page resize */
    $(window).on("resize", function() {
    resize_all_parallax();
    });

    /* keep all of your resize function calls in one place so you don't have to edit them twice (on page load and resize) */
    function resize_all_parallax() {
    var div_class = "parallax1"; /* the ID of the div that you're resizing */
    var img_w = 1000; /* the width of your image, in pixels */
    var img_h = 1000; /* the height of your image, in pixels */
    resize_parallax(div_class, img_w, img_h);
    }

    /* this resizes the parallax image down to an appropriate size for the viewport */
    function resize_parallax(div_class, img_w, img_h) {
    var div = $("." + div_class);
    var divwidth = div.width();
    if (divwidth < 769) {
        var pct = (img_h / img_w) * 105;
    } /* show full image, plus a little padding, if on static mobile view */ else {
        var pct = 60;
    } /* this is the HEIGHT as percentage of the current div WIDTH. you can change it to show more (or less) of your image */
    var newheight = Math.round(divwidth * (pct / 100));
    newheight = newheight + "px";
    div.height(newheight);
    }

    resize_all_parallax();
    alterClassTablet();
    alterClassDesktop();

})