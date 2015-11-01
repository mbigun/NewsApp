Template.appSlider.helpers({

});

Template.appSlider.onRendered(function(){
	var owl = $('#owl-carousel');
	owl.owlCarousel({
		items:1,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		lazyLoad:true
	});
});

