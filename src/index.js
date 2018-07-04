// javascript assets
import $ from 'jquery'
import '../node_modules/fullpage.js/dist/fullpage.js'

// style assets
import '../node_modules/bourbon/core/_bourbon.scss'
import '../node_modules/fullpage.js/dist/fullpage.css'
import '../node_modules/normalize-scss/sass/_normalize.scss'

//custom stylesheets
import './scss/_main-style.scss'

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true
	});

	alert("Test");

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});