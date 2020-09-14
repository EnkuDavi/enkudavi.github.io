$('.page-scroll').on('click', function(e){
    
    var href = $(this).attr('href');
    var section = $(href);
    $('html,body').animate({
        scrollTop: section.offset().top - 50
    }, 1000);

    e.preventDefault();

});