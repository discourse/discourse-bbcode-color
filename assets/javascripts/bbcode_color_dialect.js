(function() {
  function replaceFontColor (text) {
    while (text != (text = text.replace(/\[color=([^\]]+)\]((?:(?!\[color=[^\]]+\]|\[\/color\])[\S\s])*)\[\/color\]/ig, function (match, p1, p2, offset, string) {
      return "<font color='" + p1 + "'>" + p2 + "</font>";
    })));
    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceFontColor);
  Discourse.Markdown.whiteListTag('font', 'color');
})();
