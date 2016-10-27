jQuery(document).on("ready page:change", function() {
	'use strict';
	charts();
	init_wow();
});


jQuery(window).load(function() {
	'use strict';
	isotops_posts();
	setInterval(valign_logotype,2);
	setInterval(custom_isotope_relayout, 1000);
	nav();
	colorbox_image();
	
	autocollapse();
	setTimeout(function(){
	  	jQuery("#loader-wrapper").fadeOut( 500, function() {
		    jQuery("#loader-wrapper").hide();
			jQuery("#loader-wrapper").css('z-index','-1');
		});
	}, 500);
	
	scroll_top();
	validate_phone();
	validate_contact_form();
	validate_newsletter();
	
});

// on widows resize
jQuery(window).on('resize', function(){
	'use strict';
	autocollapse();
});

jQuery(window).scroll(function(){
	'use strict';
	if(jQuery(window).scrollTop() >= 10) {
		jQuery('.right_top_scroll').css('opacity','1');
		jQuery('.middle_top_scroll').css('opacity','0');
		jQuery('.navbar-default').css('background','#ffffff');
		jQuery('.navbar-default').css('border-bottom','1px solid #6b728b')
		if ( !jQuery('#autocollapse').hasClass('collapsed') ){
			  jQuery('.navbar-default').css('padding-top','0px');
		}else{
			jQuery('.navbar-default').css('padding-top','10px');
		}
		
		jQuery('.navbar-default .navbar-nav>li>a span').addClass('active_hover');
		
		
	}else{
		jQuery('.right_top_scroll').css('opacity','0')
		jQuery('.middle_top_scroll').css('opacity','1');
		jQuery('.navbar-default').css('background','transparent');
		jQuery('.navbar-default').css('border-bottom','0px solid #202740').css('padding-top','10px');
		jQuery('.navbar-default .navbar-nav>li>a span').removeClass('active_hover');
		
	}
	
});

//scroll to top of page - right corner button
function scroll_top(){
	'use strict';
	jQuery('.right_top_scroll').on('click','',function(){
		jQuery('html,body').animate({ scrollTop: "0px" });
	});
}


// PLUGIN FOR INIT ANIMATION ON SCROLL - doesn't used but You can init it and add some class to html elements like 
/// <div class=' someclass wow animated bounceIn'> which are class for init wow plugin and class for animation from animate.css - and then just paste init_wow() to top on(ready) function
function init_wow(){
	'use strict';
	new WOW().init();
}



//GRID 
// function for responsive isotops boxes http://isotope.metafizzy.co/
// isotope for grid layouts
// layout isotopse every 3 seconds
function custom_isotope_relayout(){
	'use strict';
	var $container_isotope = jQuery('.isotope_container');
	$container_isotope.isotope('layout');
}

//init isotope
function isotops_posts(){
	'use strict';
	var $body = jQuery('body');
	var window_width = jQuery(window).width();
	
	var $container_isotope = jQuery('.isotope_container');
	// MAIN RESULTS
	$container_isotope.isotope({
		itemSelector: '.item',
		masonry: {
			layoutMode: 'fitColumns',
			gutter: 0
		},
	});
	$container_isotope.imagesLoaded( function() {
	
		$container_isotope.isotope('layout');
		
	});
}

// colorbox plugin for display lightbox
function colorbox_image(){
	'use strict';
	jQuery('.colorbox_image').colorbox({
		maxWidth:'85%', 
		maxHeight:'85%',
		closeButton:false,
		opacity: '1',
		fixed:true,
	});
	
}

//NAVIGATION WITH SLIDE SCROLL PLUGIN - for more information check http://github.com/davist11/jQuery-One-Page-Nav
function nav(){
	'use strict';
	$('.nav').onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});
}


// autocollapse top menu if do not fit in window
function autocollapse() {
	'use strict';
    var navbar = jQuery('#autocollapse');
	var nav_hover = jQuery('.navbar-collapse')
    navbar.removeClass('collapsed'); 
	if(navbar.innerHeight() > 80 || jQuery(window).width() <= 767){ 
        navbar.addClass('collapsed');
		nav_hover.removeClass('navbar-hover');
	}else{
		navbar.removeClass('collapsed');
		if ( !(nav_hover.hasClass('navbar-hover')) ){
			nav_hover.addClass('navbar-hover'); 
		}
	}
};

//valign logotype on main (top page)
function valign_logotype(){
	'use strict';
	jQuery('.s0_logotype').vAlignDiv('#s-0')
}



//plugin for create line chart http://www.chartjs.org/
function charts(){
	'use strict';
	var randomScalingFactor = [7163,5432,3113,1165,10046]

	var barChartData = {
		labels : ["SHOPS PROJECT","RUBY ON RAILS","WORDPRESS","JQUERY","OTHER"],
		datasets : [
			{
				//colors for each bar
				fillColor : ["rgba(217,15,48,1)"],
				strokeColor : "rgba(220,220,220,0)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,0)",
				// data get from randomScalingFactor array
				data : [randomScalingFactor[0],randomScalingFactor[1],randomScalingFactor[2],randomScalingFactor[3],randomScalingFactor[4]]
			},
			
		]

	}
	//create chart on load
	window.onload = function(){
		
		if ( jQuery(window).width() <= 660) {
			 jQuery('#canvas').attr('height',600)
		}
		
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			//options for chartnew.js. Full documentation in https://github.com/FVANCOP/ChartNew.js/wiki 
			responsive: true,
			scaleOverride: true, scaleStartValue: 0, scaleStepWidth: 1100, scaleSteps: 10,
			inGraphDataShow:true,
			inGraphDataFontFamily: 'Montserrat',
			inGraphDataFontStyle: 'bold',
			inGraphDataFontSize: 18,
			inGraphDataVAlign: 'bottom',
			inGraphDataPaddingY: 5,
			inGraphDataFontColor:'#ffffff',
			scaleFontFamily: 'Montserrat',
			scaleFontColor: '#202740',
			scaleFontStyle: 'bold',
			yAxisLeft:false,
		});
	}
	
}


/* NOTY notifications plugin settings */
// generate function that can be used when user click on button or submit something http://ned.im/noty/  WHOLE options can (jQ and CSS) be changed in default.js 
function generate_1(type,text) {
	'use strict';
  	var n = noty({
  		text: text,
	    animation: {
	           open: 'animated bounceInLeft', // Animate.css class names
	           close: 'animated bounceOutLeft', // Animate.css class names
	           easing: 'swing', // unavailable - no need
	           speed: 500 // unavailable - no need
	    },
  		type: type,
		timeout : 5000,
        dismissQueue: true,
		maxVisible: 5,
  		layout: 'center',
  		theme: 'defaultTheme',
  	});
}

// VALIDATION NEWSLETTER PLUGIN 
function validate_newsletter(){
	
	//validation for email submit on first page
	jQuery('.validate-newsletter').submit(function(event){
		
		if ( validator.isEmail( jQuery('.input-newsletter').val()  ) ){
			
			var newsletter_ = jQuery('.input-newsletter').val();
			
			jQuery.ajax({
			       url: "submit_newsletter.php", 
			       type: "post", //can be post or get
			       data: {phone:newsletter_}, 
			       success: function(){
						//console.log('success ajax')
						jQuery('.input-newsletter').val('') ;
			       }
			});
			generate_1('success', 'Adress Email added to Our database');
			event.preventDefault();
			
		}else{
			generate_1('error', 'Adress Email in not valid <br> Please write valid email');
			event.preventDefault();
		}
	});
}


// VALIDATION PLUGIN 
function validate_phone(){
	
	//validation for email submit on first page
	jQuery('.validate').submit(function(event){
		
		if ( validator.isInt( jQuery('.input-phone').val()  ) ){
			
			var phone_ = jQuery('.input-phone').val();
			
			jQuery.ajax({
			       url: "submit_phone.php", 
			       type: "post", //can be post or get
			       data: {phone:phone_}, 
			       success: function(){
						//console.log('success ajax')
						jQuery('.input-phone').val('') ;
			       }
			});
			generate_1('success', 'Phone number added to Our database');
			event.preventDefault();
			
		}else{
			generate_1('error', 'Phone number in not valid <br> Please write valid phone number');
			event.preventDefault();
		}
	});
}


//validation for contact form
function validate_contact_form(){
	
	$('.validate-contact').submit(function(event){
		
		var email_ = jQuery('.contact-email').val();
		var sender_ = jQuery('.contact-sender').val();
		var content_ = jQuery('.contact-content').val();
		//validate email in contact form
		if ( validator.isEmail( $('.contact-email').val()  ) ){
			
		}else{
			generate_1('information', 'Email adress in not valid <br> Please write valid email adress');
			event.preventDefault();
		}
		
		//validate name in contact form
		if (validator.isAlphanumeric( $('.contact-sender').val()  ) ){
			
		}else{
			generate_1('information', 'Name can only contain letters and numbers');
			event.preventDefault();
		}
		
		//if everything is valid, run Your sending email function
		if ( validator.isAlphanumeric( $('.contact-sender').val() ) && validator.isEmail( $('.contact-email').val() ) &&  $('.contact-content').val() !=''  ){
			
			generate_1('success', 'Thank You for Contact with Us');
			//console.log('success validate')
			
			jQuery.ajax({
			       url: "mails.php", 
			       type: "post", //can be post or get
			       data: {email:email_ , name:sender_ , message:content_}, 
			       success: function(){
						//console.log('success ajax')
						jQuery('.contact-email').val('') ;
						jQuery('.contact-sender').val('') ;
						jQuery('.contact-content').val('');
			       }
			});
			event.preventDefault();
			
		}
	});
}




// small plugin for vertical align in middle
jQuery.fn.vAlignDiv = function(div) {
  'use strict';
  return this.each(function(i){
  var ah = $(this).height();
  var ph = $(div).height();
  var mh = (ph - ah) / 2.1;
  if(mh>0) {
    $(this).css('margin-top', mh);
  } else {
    $(this).css('margin-top', 0);
  }
})
}