$(function(){
  function buildHTML(message){
  var MessageImage  = (message.img) ?  `img class="lower-message__image" src="${message.img}"` : ``
  var html =
    `<div class="message" data-id = "${message.id}">
    <div class="upper-message">
    <div class="upper-message__user-name">
      ${message.user_name}
    </div>
      <div class="upper-message__date">
        ${message.date}
      </div>
    </div>
    <div class="lower-message">
        <p class="lower-message__content">
          ${message.text}
        </p>  
        <img class="${ MessageImage }"> 
    </div>
  </div>`
  return html;
  }
  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.new_message')[0].reset();
      // $('.form__submit').prop('disabled', false);
      $('.form__submit').removeAttr('disabled');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('.form__submit').prop('disabled',false);
    })
    .fail(function(){
      alert('error');
      $('.form__submit').prop('disabled',false);
    });
  });

  var reloadMessages = function() {
    last_message_id = $('.message').last().data('id');
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
    var insertHTML = '';
    messages.forEach(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
    })
    })
    .fail(function(){
      
    })
  };
      setInterval(reloadMessages, 5000);
});