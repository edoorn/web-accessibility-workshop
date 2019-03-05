
$(document).ready(function () {

  // Form interaction classes
  $('.field input, .field textarea').focus(function () {
    $(this).parent().addClass('focused');
  }).blur(function () {
    tmpval = $(this).val();
    $(this).parent().removeClass('focused');
    if (tmpval == '') {
      $(this).parent().removeClass('filled');
    } else {
      $(this).parent().addClass('filled');
    }
  });

  // window scroll functions
  $(window).scroll(function () {

    // Panel sections
    $('.panel-section').each(function () {
      section = $(this);
      sectionTop = section.offset().top - $(window).height() + 250;
      viewportTop = $(window).scrollTop();
      if (sectionTop < viewportTop) {
        section.addClass('section-visible');
        section.removeClass('section-hidden');
      } else {
        section.removeClass('section-visible');
        section.addClass('section-hidden');
      }
    });

    // Logos section
    $('#client-logos').each(function () {
      logos = $(this);
      logosTop = logos.offset().top - $(window).height() + 150;
      viewportTop = $(window).scrollTop();
      if (logosTop < viewportTop) {
        logos.addClass('logos-visible');
        logos.removeClass('logos-hidden');
      } else {
        logos.removeClass('logos-visible');
        logos.addClass('logos-hidden');
      }
    });

  });

  // // Smooth scroll
  // $('a[href^="#"]').on('click', function (e) {

  //   var target = $($(this).attr('href'));

  //   if (target.length) {
  //     e.preventDefault();
  //     $('html, body').animate({
  //       scrollTop: target.offset().top
  //     }, 500);
  //   }
  // });

});