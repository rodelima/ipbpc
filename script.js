$(document).ready(function(){

  /* Animações com Scroll */

  $('.dia-agenda').waypoint(function(direction){
    $('.dia-agenda').addClass('animated tada')
  }, {
    offset: '80%'
  });

  $('.ultima-pregacao').waypoint(function(direction){
    $('.ultima-pregacao').addClass('animated fadeInRight')
  }, {
    offset: '60%'
  });

  $('.noticia').waypoint(function(direction){
    $('.noticia').addClass('animated fadeIn')
  }, {
    offset: '70%'
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

});
