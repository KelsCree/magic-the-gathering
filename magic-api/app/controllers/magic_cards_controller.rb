class MagicCardsController < ApplicationController

  def index
    @magicCards = MagicCard.all
    render json: @magicCards
  end

end
