$( document ).ready(function(){
	//clear svg region
	setTimeout(function(){
		$('.name-show').show();
		$('#svg-region').hide(function(){
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
								});
							});
						});
					});
				},600);
			});
		});
	},12000)
})