//Responsive Nav
$(function(){
    menu = $('nav ul')

    $('#openup').on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        let w = $(this).width();
        if(w > 580 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function(e){
        let w = $(window).width();
        if(w < 580){
            menu.slideToggle();
        }
    });

    $('.open-menu').height($(window).height());
});