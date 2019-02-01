import '../node_modules/jquery/dist/jquery.js'

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
