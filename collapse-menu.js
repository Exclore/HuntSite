$( document ).ready(function() {
$('ul#menu-content-list > li > span').on('click', function () {
    $(this).parent().children('ul').slideToggle(function() {
        $(this).toggleClass('in out');
    });

    $(this).parent().siblings().find('ul').slideUp(function() {
        $(this).removeClass('in').addClass('out');
    });
});
});