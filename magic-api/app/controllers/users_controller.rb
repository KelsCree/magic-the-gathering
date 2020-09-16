class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.messages
    end
  end

  private

  def user_params
    params.require(:user).permit([:username, :email, :password])
  end
end
