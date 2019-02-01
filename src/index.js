// style assets
import '../node_modules/normalize-scss/sass/_normalize.scss'
import '../node_modules/fullpage.js/dist/fullpage.css'

//custom stylesheets
import './scss/_main-style.scss'

// javascript assets
import 'handlebars';
import $ from 'jQuery';
window.jQuery = $;
window.$ = $;
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin
UIkit.use(Icons);

// custom script
$(document).ready(function() {

  UIkit.notification("<h3>Welcome! Just a heads up...</h3><p>My fancy new website is still under development. Please check my <a href='https://www.linkedin.com/in/christopherjiang/'>LinkedIn</a> for my full portfolio<br><a href='http://christopherisonline.com/legacy'>Go here for an older stable release!</a></p>");

  // removes the artificial loading-screen after l33t miliseconds
  setTimeout(function(){
    $("#fullpage").css('visibility', 'visible');
    alignHeaders();
    alignDescription();
    fixLinks();
  }, 400);

  // aligns on load & recalculate on resize (only for desktop)
  $(window).resize(function(){
    alignHeaders();
    alignDescription();
    fixLinks();
  });

  // removes extra space in the description for mobile devices
  if ($(window).width() < 1200) {
    $('h2').each(function(){
        $(this).html($(this).html().replace(/&nbsp;/gi,''));
    });
  }

  // aligns the subheader in the middle of the coloured box
  function alignHeaders(){
    if ($(window).width() < 1200)
      return

    $('div[class^="header-text"]').each(function(){
      var halfWidth = $(this).children('h2').width() / 2;
      if ($(this).children('h2').attr('id') == "graphic-design"){
        //to compensate for graphic being one character longer than design
        halfWidth += halfWidth / 12;
        $(this).css('transform', 'translateX(-' + halfWidth + 'px)');
      } else {
        $(this).css('transform', 'translateX(' + halfWidth + 'px)');
      }
    })
  }
  function alignDescription(){
    if ($(window).width() < 1200)
      return

    $('div[class^="description"]').each(function(){
      var parentHeight = $(this).siblings('div[class^="header-text"]').height();
      $(this).css('transform', 'translateY(' + (36 + parentHeight) + 'px)');
    });
  }
  function fixLinks(){
    if ($(window).width() > 460)
      return

    var linkList = $('.contact-link').map(function(){
      return $(this).width();
    });
    var sideWidth = $(window).width() - linkList[0] - linkList[3] - 40;
    $('.icon-container').css('transform', 'translateX(' +  (sideWidth / 2) + 'px');
    $('.icon-container').css('left', '0');
  }
});
