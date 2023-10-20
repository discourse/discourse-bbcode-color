# frozen_string_literal: true

# name: discourse-bbcode-color
# about: Adds BBCode colors to the post formatting options. 
# meta_topic_id: 65363
# version: 0.2
# authors: Neil Lalonde, Régis Hanol
# url: https://github.com/discourse/discourse-bbcode-color
# transpile_js: true

after_initialize do
  chat&.enable_markdown_feature("bbcode-color") if respond_to?(:chat) && SiteSetting.chat_enabled
end
