require "rails_helper"

feature "Browser the Home Address", js: true do
  scenario "User can see the home content" do
    visit "/"
    expect(page).to have_text("Home view")
  end
end
