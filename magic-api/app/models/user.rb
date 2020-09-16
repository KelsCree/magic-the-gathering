class User < ApplicationRecord
  has_secure_password
  has_many :likes
  has_many :magicCards, through: :likes

  validates :username, :email, :password, presence: {message: "%{attribute} cannot be blank"}
  validates :username, uniqueness: {message: "%{attribute} cannot be blank, %{value} has already been used."}
  validates :username, length: {minimum: 6, maximum: 14, message: "%{attribute} cannot be blank, %{value} has already been used."}
  validates :password, length: {minimum: 6, maximum: 14, message: "%{attribute} cannot be blank, %{value} has already been used."}
end
