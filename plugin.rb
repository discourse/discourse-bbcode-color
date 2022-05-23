# frozen_string_literal: true

# name: discourse-bbcode-color
# about: A Discourse plugin to support BBCode color tags.
# version: 0.2
# authors: Neil Lalonde, Régis Hanol
# url: https://github.com/discourse/discourse-bbcode-color/
# transpile_js: true

after_initialize do
  if respond_to?(:discourse_chat)
    discourse_chat&.enable_markdown_feature('bbcode-color')
  end
end
