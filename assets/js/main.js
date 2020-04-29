function timestamp() {  var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") { var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
function grecaptchaValidation(){ 
  if(grecaptcha.getResponse().length == 0){ 
      alert('Please click the reCAPTCHA checkbox');
      return false;
  }
  return true;
}

var contact = null;

$('#contact1, #contact2').click(function(e) {
    e.preventDefault();
    if(contact == 'open') {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
    } else {
    	$( ".contact" ).slideToggle( "slow", function() {
  		if (contact == null || contact == 'close') {
  			contact = 'open';
  		} else if (contact == 'open') {
  			contact = 'close';
  		}
  	});
 	
 	$("html, body").animate({ scrollTop: 0 }, "slow");

    }	
  	return false;
});

$('#contact-close').click(function(e) {
	$(".contact").slideToggle("slow");
	contact = 'close';
});

$('#always-on').click(function(e) {
    e.preventDefault();
 	$("html, body").animate({ scrollTop: $(".always-on").offset().top }, "slow");
  	return false;
});

$('#gmp').click(function(e) {
    e.preventDefault();
 	$("html, body").animate({ scrollTop: $(".gmp").offset().top }, "slow");
  	return false;
});