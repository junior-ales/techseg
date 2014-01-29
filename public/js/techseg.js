$(document).ready(function() {
  $('#ano').text(new Date().getFullYear());
  $('#enviar-email').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/email',
      data: {
        'message': {
          'from_email': '',
          'to': [{
            'email': '',
            'name': 'Cliente TechSeg',
            'type': 'to'
          }],
          'autotext': 'true',
          'subject': 'Contato Pelo Site',
          'html': ''
        }
      },
      timeout: 30000
    }).success(function(response) {
      $('.alert-box').hide();
      $('#msg-email-success').show();
    }).error(function(response) {
      console.log(response);
      $('.alert-box').hide();
      $('#msg-email-error').show();
    }).complete(function(response) {
      $('#msg-email-container').stop(true).fadeIn('slow').delay(8000).fadeOut('slow');
    });
  });
});

$(document).ajaxStart(function() {
  $('.form-elem').each(function() { $(this).prop('disabled', true); });
  $('#enviar-email').find('span').css('visibility', 'hidden');
  $('#loading-spin').show();
}).ajaxStop(function() {
  $('.form-elem').each(function() { $(this).prop('disabled', false); });
  $('#loading-spin').hide();
  $('#enviar-email').find('span').css('visibility', 'visible');
});
