$(document).ready(function () {

    $('#element-to-animate1').css('opacity', 0);
    $('#element-to-animate1').waypoint(function () {
        $('#element-to-animate1').addClass('fadeInUp');
    }, { offset: '70%' });

    $('#element-to-animate2').css('opacity', 0);
    $('#element-to-animate2').waypoint(function () {
        $('#element-to-animate2').addClass('fadeInUp');
    }, { offset: '70%' });

})