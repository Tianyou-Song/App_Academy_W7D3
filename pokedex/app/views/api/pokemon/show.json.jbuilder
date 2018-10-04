json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
  json.items_ids do
    json.array! @pokemon.item_ids
    # @pokemon.items.each do |item|
    #   json.extract! item, :id  # How to display only the value.
    #     # json.render (item.id)
    # end
  end

end


json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
      end
  end
end
