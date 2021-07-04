$('document').ready(() =>  {

    $('.carousel').carousel({
      interval: 1500
    });
  
    $('.carousel-control-prev').click(function(e) {
      e.preventDefault();
      $('#pvCarousel').carousel('prev');
    });
  
    $('.carousel-control-next').click(function(e) {
      e.preventDefault();
      $('#pvCarousel').carousel('next');
    });
  
  
    // Scroll
    $('.navbar a').click(function(e){
      e.preventDefault();
      const goto = this.hash;
      $('html').animate({
        scrollTop: $(goto).offset().top,
      }, 800)
    });
  
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip()
  
    // Popover
    $('[data-toggle="popover"]').popover();
  
  });