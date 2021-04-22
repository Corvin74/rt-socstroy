 document.addEventListener('DOMContentLoaded', function(){
 	$(document).ready(function(){
 		function footertwo(){
		$(".footerrighttbuttontwo").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 500);
			return false;
		});
	} footertwo();
	});
});