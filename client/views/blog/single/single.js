Template.blogSingle.helpers({
	'slideshow': function() {
		return Slideshows.findOne({_id: this.slideshow});;
	}
});

Template.blogSingle.rendered = function () {
    $('#carousel').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};
