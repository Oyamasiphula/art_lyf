// [<tab function>
$(function() {
  $("#tabs").tabs();
});
// <tab function>]

// [<top nav bar>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// <top nav bar>]

// [<typing animation>
$(function() {
  var message = {

    message: [
      'Art;',
      'fashion development;',
      'eye candy design;',
      'to be creative;'

    ],
    counterS: 0,
    counterL: 0,
    deleteS: false,

    init: function() {
      this.cacheElem();
      this.type();
    },

    cacheElem: function() {
      this.$text = $('.text');
    },

    type: function() {
      var message = this.message[this.counterS],
        that = this,
        speed = 0;

      message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
      if (this.message[this.counterS] != message && !this.deleteS) {
        this.$text.text(message);
        speed = 90;
      } else {
        this.deleteS = true;
        speed = this.message[this.counterS] == message ? 1000 : 40;
        this.$text.text(message);
        if (message == '') {
          this.deleteS = false;
          this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
        }
      }
      setTimeout(function() {
        that.type()
      }, speed);
    }
  };
  message.init();
});
// <typing animation>]

// [<about skills>
;( function( $ ) {
  "use strict";

  var $bars = $( ".bar" ),
    methods = {
      init: function() {

        // Bind events
        methods.bindEvents();

      },
      bindEvents: function() {

        // Loop through each of the bars...
        $bars.each( function() {

          var $bar = $( this ),
            $pct = $bar.find( ".pct" ),
            data = $bar.data( "bar" );

          setTimeout( function() {

            $bar
              .css( "background-color", data.color )
              .animate({
                "width": $pct.html()
              }, data.speed || 3000, function() {

                $pct.css({
                  "color": data.color,
                  "opacity": 1
                });

              });

          }, data.delay || 0 );

        });

      }
    };

  // Initialize on page load
  methods.init();

})( jQuery );
// <about skills>]
