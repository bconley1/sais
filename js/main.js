// on scroll, Condensed Menu revealed
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('.menu').fadeIn(150);
  } else {
    $('.menu').fadeOut(150);
  }
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var sidemenu = document.getElementById("sidemenu");
var sidemenu2 = document.getElementById("sidemenu2");

// Get the offset position of the navbar
var sticky_var = 250;
var unsticky = 1138;

function myFunction() {
  if (window.pageYOffset > unsticky) {
  	sidemenu2.classList.add("visible");
  	sidemenu.classList.remove("sticky");
  } else if (window.pageYOffset > sticky_var) {
    sidemenu.classList.add("sticky");
    sidemenu2.classList.remove("visible");
  } else {
    sidemenu.classList.remove("sticky");
  }
}

var menuOn = false;

function hamburger (){
	event.preventDefault();
	
	if(menuOn){

		document.getElementById("mainmenu").style.width = "0px";
		menuOn = false;

	}else{

		document.getElementById("mainmenu").style.width = "495px";
		menuOn = true;
}
}

$('#hamburger').click(hamburger);



var menuOn2 = false;

function condensedmenu (){
	event.preventDefault();
	
	if(menuOn2){

		document.getElementById("mainmenu2").style.width = "0px";
		menuOn2 = false;

	}else{

		document.getElementById("mainmenu2").style.width = "495px";
		menuOn2 = true;
}
}

$('#condensedmenu').click(condensedmenu);