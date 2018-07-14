// style assets
import '../node_modules/normalize-scss/sass/_normalize.scss'
import '../node_modules/fullpage.js/dist/fullpage.css'

//custom stylesheets
import './scss/_main-style.scss'

// javascript assets
import $ from 'jQuery'
window.jQuery = $;
window.$ = $;
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin
UIkit.use(Icons);

// custom script
$(document).ready(function() {

  // Removes the artificial loading-screen after l33t miliseconds
  setTimeout(function(){
    $("#loading-screen").fadeOut();
    $(".uk-offcanvas-content").css('visibility', 'visible');
  }, 1337);

  //img src's for webpack to serve
  $("#longboard").attr('src', '../imgs/Longboard.png');


  // aligns on load & recalculate on resize
  alignHeaders();
  alignDescription();
  $(window).resize(function(){
    alignHeaders();
    alignDescription();
  });

  // Aligns the subheader in the middle of the coloured box
  function alignHeaders(){
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
    $('div[class^="description"]').each(function(){
      var parentHeight = $(this).siblings('div[class^="header-text"]').height();
      $(this).css('transform', 'translateY(' + (36 + parentHeight) + 'px)');
    });
  }
});
