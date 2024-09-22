// typed part start 
$(function () {
	$(".typed").typed({
		strings: ["MD.RAFID HOSSEN.", "Front-end Developer.", "Creative Web Designer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () { },
		// starting callback function before each string
		preStringTyped: function () { },
		//callback for every typed string
		onStringTyped: function () { },
		// callback for reset
		resetCallback: function () { }
	});
	// typed part end 

	// counterup part start 
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	// counterup part end 

	//   silck slider part start	
	$('.mywork').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		prevArrow: '<i class="fa-solid fa-chevron-left prev"></i>',
		nextArrow: '<i class="fa-solid fa-chevron-right nextv"></i>',
		dots: true,
	});
	//   silck slider part end

	//   mixitup part start
	var containerEl = document.querySelector('.option');

	var mixer = mixitup(containerEl);
	// mixitup part end
	$('.customer').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: '<i class="fa-solid fa-chevron-left prev"></i>',
		nextArrow: '<i class="fa-solid fa-chevron-right nextv"></i>',
	});
});
