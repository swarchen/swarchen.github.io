$(function() {
	NProgress.start();
});
$(window).load(function(){
	NProgress.done();
	$('.block-left').show().addClass(' animated bounceInLeft');
	setTimeout(function () {
		$('.block-title').show().addClass('animated bounceInLeft')},300)
	setTimeout(function () {
		$('.block-social').show().addClass('animated bounceInLeft')},600)
	setTimeout(function () {
		$('.content').show().addClass('animated fadeInUpBig')},1100)
})