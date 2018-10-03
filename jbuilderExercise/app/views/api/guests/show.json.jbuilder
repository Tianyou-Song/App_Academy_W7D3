# debugger

json.partial! 'guest', guest: @guest

json.gifts do

  json.array! @guest.gifts.each do |gift|
    json.extract! gift, :title, :description
  end

end
