class Api::GuestsController < ApplicationController
  def index
    @guests = Guest.all
    render :index
  end

  def show
    # debugger
    @guest = Guest.find_by(id: params[:id])
    render 'api/guests/show'
  end
end
