$( document ).ready(function(){
	//clear svg region
	setTimeout(function(){
		$('.name-show').show();
		$('#svg-region').fadeOut(function(){
			$('#jhao').fadeTo('slow', 0.9, function(){
				setTimeout(function(){
					$('#yang').fadeTo('slow', 0.9, function(){
						$('#yang').fadeTo(1200, 0, function(){
							$('#yang').css('display','none');
							$('#chi').css('display','initial');
							$('#chi').fadeTo('slow', 0.9, function(){
								$('#chi').fadeTo(1200, 0, function(){
									$('#chi').css('display','none');
									$('#cheng').css('display','initial');
									$('#cheng').fadeTo('slow', 0.9);
									setTimeout(function(){
										$('.name-show').fadeOut(1000).fadeIn(1000).fadeOut(900).fadeIn(900).fadeOut(700).fadeIn(700).fadeOut(500).fadeIn(500).fadeOut(400).fadeIn(400).fadeOut(300).fadeIn(300).fadeOut(300,function(){
											$('.cv').fadeIn(1000);
										});
									},1000)
								});
							});
						});
					});
				},600);
			});
		});
	},12000)
})