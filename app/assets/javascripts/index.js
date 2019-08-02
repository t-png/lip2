$(document).on('turbolinks:load', function() {
  var search_list = $("#user-search-result");
  function appendUser(user){
  var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.user_name} </p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.user_id} " data-user-name="${user.user_name}">追加</div>
    </div>`  
  search_list.append(html);
  }
  function appenderoor(user){
    var html = `<li>
    <div class="chat-group-user clearfix">${ user }</div>
    </li>
    return html;`
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appenderoor("一致するユーザーは見つかりません");
      }
    })
    .fail(function(users) {
      alert('検索に失敗しました');
    })
  });

  $('#user-search-result').on('click', '.chat-group-user__btn', function(){
  var search_list = $("#chat-group-users");
  var user_name = $(this).data('user-name');
  var user_id = $(this).data('user-id');
  var html =
  `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
  <input name='group[user_ids][]' type='hidden' value='${user_id}'>
  <p class='chat-group-user__name'>${user_name}</p>
  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  </div>`
  search_list.append(html);
  $("#user-search-result").empty();
  });

  $('#chat-group-users').on('click', '.chat-group-user__btn--remove', function(){
    var search_list = $("#chat-group-users");
    $(this).parent().remove();
    });

});


