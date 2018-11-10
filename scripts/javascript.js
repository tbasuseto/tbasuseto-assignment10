$(document).ready(() => {


  $('img').hide('img');

  $('#Angel').on('click', () => {
    $('img').fadeOut('img').fadeIn(1000).show('img').attr('src', 'images/angelprofile.png');
    $('.description').fadeIn(1000).attr('#aboutAngel');
  });

  $('img').on('mouseenter', () => {
    $('img').fadeOut(800);
});

  $('#Florence').on('click', () => {
    $('img').fadeOut('img').fadeIn(1000).show('img').attr('src', 'images/florenceprofile.png');
      });
    $('img').on('mouseenter', () => {
      $('img').fadeOut(800);
  });

  $('#Tanya').on('click', () => {
  $('img').fadeOut('img').fadeIn(1000).show('img').attr('src', 'images/tanyaprofile.png');
    $('img').fadeIn(1000).show('#aboutTanya');
  });
  $('img').on('mouseenter', () => {
    $('img').fadeOut(800);
});

  $('#Kathleen').on('click', () => {
    $('img').fadeOut('img').fadeIn(1000).show('img').attr('src', 'images/kathleenprofile.png');
    $('#aboutKathleen').fadeIn(1000).show('#aboutKathleen');
  });
  $('img').on('mouseenter', () => {
    $('img').fadeOut(800);
});


});
