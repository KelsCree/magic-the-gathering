# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'byebug'
require 'rest-client'
require 'json'

def create_seeds
  response = RestClient.get("https://api.magicthegathering.io/v1/cards")
  data = JSON.parse(response)
  data["cards"].each do |card|
    MagicCard.create(
      name: card["name"],
      imageURL: card["imageUrl"]
    )
  end
end

create_seeds
