json.array! @messages do |message|
  json.text message.content
  json.img message.image.url
  json.date message.created_at.strftime("%Y/%m/%d %H:%M")
  json.user_name message.user.name
  json.id message.id
end
