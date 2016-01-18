onePageScroll(".index", {
sectionContainer: "article",
loop: false,
beforeMove: function() {$( ".mouse-icon" ).fadeOut( "fast", function() {});},
responsiveFallback: false
});

$( ".mouse-icon" ).click(function() {moveDown(".index");});
