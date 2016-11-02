$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

// value holds the state of the chevron
var value = 0

// this holds the value of whether the
// social bar is showing
var socialBarShowing = false;

$(".chevron-right").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $(this).rotate({ animateTo:value})

      // toggle the social bar status
      socialBarShowing = !socialBarShowing;

      if (socialBarShowing) {
          $('.social-bar').animate({left:'-330px', bottom:'-280px'}, {queue: false, duration: 500});
      } else {
	      $('.social-bar').animate({left:'0px', bottom:'50px'}, {queue: false, duration: 500});      	
      }
    }
  }
});

/*
$(function () {
    $(".mediabutton").toggle(function () {
	    console.log("1");
        $("#facebook-bar").parent().animate({left:'0px'}, {queue: false, duration: 500});
    }, function () {
	    console.log("2");
        $("#facebook-bar").parent().animate({left:'-280px'}, {queue: false, duration: 500});
    });
});
*/