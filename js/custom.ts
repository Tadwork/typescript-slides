///<reference path="../typings/reveal/reveal.d.ts"/>
// Custom code can go here

// You can customize Reveal options:
Reveal.configure({"center": false});

// head.js does not have any typings
declare var head:any;

// (an outdated version of) http://headjs.com/ is also loaded
head.ready("lodash.min.js", function () {
  // LoDash can be used from here
});
head.js("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js");

var why = function ():void {
    console.log('logging errors')
}
Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    switch(event.currentSlide.id){
        case 'why':
            why();
    }
    console.log(event.currentSlide.id);
} );