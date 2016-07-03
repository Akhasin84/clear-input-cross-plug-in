
$.fn.clearInput = function(){

	$(this).focus(function(){
			var whatToClear = $(this)
			$('.clear__cross').remove();
			$(this).css({'padding-right': '0px'})
			var position = $(this).position();
			var elementWidth = $(this).width();
			var elementHeight = $(this).height();
			var sevenPercent = (elementWidth / 100 ) * 7;
			var clear__crossTop = position.top + elementHeight; 
			var clear__crossLeft = position.left + elementWidth;
			$('<span class="clear__cross">+</span>').insertAfter(this);
			$('.clear__cross').css({
					'top': clear__crossTop + 'px',
					'left': clear__crossLeft + 'px'
			});
			$(this).css({
				'padding-right': sevenPercent,
				'margin-right': '4px'
			});
			$('.clear__cross').on('click', function(){
				$(this).prev(whatToClear).val("");
			});
	});
};

$(document).ready(function(){

	$('input').clearInput();
	$('textarea').clearInput();
	
});