json.text  @message.content
json.user_id  @message.user.id
json.user_name  @message.user.name
json.date  @message.created_at.strftime("%Y/%m/%d %H:%M")
json.img   @message.image.url
json.id    @message.id

