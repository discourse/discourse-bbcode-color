require 'rails_helper'

describe PrettyText do
  it 'can apply color bbcode' do
    cooked = PrettyText.cook "hello [color=red]RED[/color] world"
    html = '<p>hello <font color="red">RED</font> world</p>'

    expect(cooked).to eq(html)
  end

  it 'can apply background color bbcode' do
    cooked = PrettyText.cook "hello [bgcolor=red]RED[/bgcolor] world"
    html = '<p>hello <span style="background-color:red">RED</span> world</p>'

    expect(cooked).to eq(html)
  end
end

