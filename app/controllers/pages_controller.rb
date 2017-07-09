class PagesController < ApplicationController
  def home
    # We need to set a first quote's ID here
    @first_quote_id = Quote.first.id
  end
end
