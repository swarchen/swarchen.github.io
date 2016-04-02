$( document ).ready(function(){
	setTimeout(function(){
		$('#svg-region').show();
	},500);
	//clear svg region
	setTimeout(function(){
		$('#svg-region').fadeOut(function(){
			$('.cv').fadeIn(1000);
		});
	},11000)

})