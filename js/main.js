$('.dropdown').hover(function(){
	var windowsize = $(window).width();
	var k = $(this).attr('menu');
	if ( windowsize >= (992-18) ) {
		$('.menu-set-'+k+' .dropdown-menu').fadeToggle(200);
		$('.menu-set-'+k+' .dropdown-item').click(function(){
			$('.menu-set-'+k+' .dropdown-toggle').focus();
		});
	};
});


$('.menu-toggle').click(function() {
	$('.menu-low .navbar-menu').slideToggle();
});

$('.dropdown-toggle').click(function() {
	var k = $(this).parent().attr('menu');
	$('.menu-low .menu-set-'+k+' .dropdown-menu').slideToggle();
});




function widthTrack(){
	// square height control
	let squareWidth = document.getElementById('square-get').offsetWidth;
	let squareObj = document.getElementsByClassName('square');
	Array.prototype.forEach.call(squareObj, item => {
		item.style.height = squareWidth + "px";
	});
	// logo src control
	if ( window.innerWidth < 992 ) {
		document.getElementsByClassName('navbar-brand')[0].getElementsByTagName('img')[0].src = "img/logo2-w.png";
	}
}




let squareElements = document.getElementsByClassName('square');
Array.prototype.forEach.call(squareElements, item => {
	shadow(item);
});
function shadow(item) {
	item.addEventListener('mouseover', function () {
		this.classList.add('shadow');
	});
	item.addEventListener('mouseout', function () {
		this.classList.remove('shadow');
	});
}




function eMailSubmit() {
	let alertValue = document.getElementById("eMailInput").value;
	if ( alertValue.indexOf("@") != -1 ) {
		if ( alertValue.indexOf(".") != -1 ) {
			alertValue = "E-mail " + alertValue + " has been subscribed.\n\nThank you!";
			alert(alertValue);
			return false;
		}
	}
	alert("Please enter valid e-mail.");
	return false;
}




