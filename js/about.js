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

$(".mediabutton").rotate({
  bind:
  {
    click: function(){
      value +=180;
      $('.chevron-right').rotate({ animateTo:value})

      // toggle the social bar status
      socialBarShowing = !socialBarShowing;

      if (socialBarShowing) {
          $('.social-bar').animate({left:'0px', bottom:'50px'}, {queue: false, duration: 500});
      } else {
	      $('.social-bar').animate({left:'-330px', bottom:'-280px'}, {queue: false, duration: 500});      	
      }
    }
  }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        document.getElementById("greeting").innerHTML = "Hello " + user;
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}