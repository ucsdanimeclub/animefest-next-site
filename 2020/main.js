 (function($) {
    //Smooth scroll transition when item clicked in nav 
    $('a.page-scroll').click(function() {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $( $anchor.attr('href')).offset().top
        }, 700);
        return false;
    });

    //Highlights top of nav when scrolling
    $('body').scrollspy({target: '#navbar'});
    
    //For hovering over sponsor list
    var __sf = $(".sponsors ul span");
    var __sf_cont = $(".sponsors ul");
    var __title = $("#sponsor-title");

    __sf.mouseenter(function() {
      $(this).addClass('hover');
      __sf_cont.addClass('enter');
      var __setTitle = $(this).attr("data-group-title");
      __title.html(__setTitle);
    }).mouseleave(function() {
      $(this).removeClass('hover');
      __sf_cont.removeClass('enter');
      var __setTitle = $(__title).attr("data-default-title");
      __title.html(__setTitle);
});

})(jQuery);
