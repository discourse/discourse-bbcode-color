(function() {
  // Don't bother with this code if the new dialect system is present
  if (Discourse.dialect_deprecated) { return; }

  function replaceFontColor (text) {
    while (text !== (text = text.replace(/\[color=([^\]]+)\]((?:(?!\[color=[^\]]+\]|\[\/color\])[\S\s])*)\[\/color\]/ig, function (match, p1, p2) {
      return "<span style='color: " + p1 + "'>" + p2 + "</span>";
    })));
    return text;
  }

  function replaceFontBgColor (text) {
    while (text !== (text = text.replace(/\[bgcolor=([^\]]+)\]((?:(?!\[bgcolor=[^\]]+\]|\[\/bgcolor\])[\S\s])*)\[\/bgcolor\]/ig, function (match, p1, p2) {
      return "<span style='background-color: " + p1 + "'>" + p2 + "</span>";
    })));
    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceFontColor);
  Discourse.Dialect.addPreProcessor(replaceFontBgColor);
  Discourse.Markdown.whiteListTag('span', 'style', /^color:.*$/i);
  Discourse.Markdown.whiteListTag('span', 'style', /^background-color:.*$/i);
})();
