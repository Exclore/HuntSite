$( document ).ready(function() {
$('#menu-content-list').on('click', 'li', function () {
    $(this).children('ul').slideToggle(function() {
        $(this).toggleClass('in out');
    });

    $(this).siblings().find('ul').slideUp(function() {
        $(this).removeClass('in').addClass('out');
    });
});
});