class MagicCard < ApplicationRecord
  has_many :likes
  has_many :users, through: :likes

  def index
    @magic_cards = MagicCard.all
    render json: @magicCards
  end

end
