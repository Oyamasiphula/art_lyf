$(document).ready(function () {
    "use strict";
        
        // tabs vars
    var li = $('#about-me .tabs .tab-item'),
        nfLi = $('#about-me .tabs .tab-item:not(:first-of-type)'),
        nfLiInfo = nfLi.find($('.tab-info')),
        info = $('#about-me #info-tap'),
        // riplle hover effect vars
        parent,
        ink,
        d,
        x,
        y;
  
      // tab info text / icons
    
    if ($(window).outerWidth() < 590) {
        nfLiInfo.text('');
    }
    
    $(window).on('resize', function () {
        if ($(window).outerWidth() < 590) {
            nfLiInfo.text('');
        } else {
            $('#about-me .tabs .tab-item:nth-of-type(3) .tab-info').text('Soft Skills');
            $('#about-me .tabs .tab-item:nth-of-type(4) .tab-info').text('Technical Skills');
        }
    });
    
    // set the z index layers
        
    li.each(function () {
        $(this).css({zIndex : $(this).data('index')});
    });
    
    // expand the taps and some debug
    
    info.on('click', function () {
        nfLi.toggleClass('animated');
        nfLi.removeClass('active');
    });
    
    // taps styling
    
    nfLi.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
 
    
    // riplle click effect
  
    li.on('click', function (e) {
        
        parent = $(this).parent();
        
        //create .ink element if it doesn't exist
        if (parent.find(".ink").length === 0) {
            parent.prepend("<span class='ink'></span>");
        }

        ink = parent.find(".ink");
        
        ink.removeClass("animate");

        if (!ink.height() && !ink.width()) {
          
            d = Math.max(li.outerWidth(), li.outerHeight());
            ink.css({height: d, width: d});
        }

        x = e.pageX - parent.offset().left - ink.width() / 2;
        y = e.pageY - parent.offset().top - ink.height() / 2;

        //set the position and add class .animate
        ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");
    });
    
});