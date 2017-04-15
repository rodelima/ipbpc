$(document).ready(function(){

  /* Animações com Scroll */

  $('.dia-agenda').waypoint(function(direction){
    $('.dia-agenda').addClass('animated fadeIn')
  }, {
    offset: '80%'
  });

  $('.ultima-pregacao').waypoint(function(direction){
    $('.ultima-pregacao').addClass('animated zoomIn')
  }, {
    offset: '75%'
  });

  $('.noticia').waypoint(function(direction){
    $('.noticia').addClass('animated fadeIn')
  }, {
    offset: '75%'
  });

  $('.federacao').waypoint(function(direction){
    $('.federacao').addClass('animated bounceIn')
  }, {
    offset: '75%'
  });

  $('.fa-map-marker').waypoint(function(direction){
    $('.fa-map-marker').addClass('animated bounce')
  }, {
    offset: '80%'
  });

  /* Mobile Nav */

  $('.mobile-nav-icon').click(function(){
    var nav = $('.main-nav');
    var icon = $('.mobile-nav-icon i');

    if (icon.hasClass('fa-bars')){
      nav.removeClass('menu-off');
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      nav.addClass('menu-off');
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });

});
