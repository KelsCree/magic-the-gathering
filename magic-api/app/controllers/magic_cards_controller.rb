class MagicCardsController < ApplicationController

  def index
    @magicCards = MagicCard.all
    render json: @magicCards
  end

  def destroy
    @magicCard = MagicCard.find(params[:id])
    @magicCard.destroy
  end
end
