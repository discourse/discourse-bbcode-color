(function() {
  function replaceFontColor (text) {
    while (text != (text = text.replace(/\[color=([^\]]+)\]((?:(?!\[color=[^\]]+\]|\[\/color\])[\S\s])*)\[\/color\]/ig, function (match, p1, p2, offset, string) {
      return "<font color='" + p1 + "'>" + p2 + "</font>";
    })));
    return text;
  }

  function replaceFontBgColor (text) {
    while (text != (text = text.replace(/\[bgcolor=([^\]]+)\]((?:(?!\[bgcolor=[^\]]+\]|\[\/bgcolor\])[\S\s])*)\[\/bgcolor\]/ig, function (match, p1, p2, offset, string) {
      return "<span style='background-color: " + p1 + "'>" + p2 + "</span>";
    })));
    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceFontColor);
  Discourse.Dialect.addPreProcessor(replaceFontBgColor);
  Discourse.Markdown.whiteListTag('font', 'color');
  Discourse.Markdown.whiteListTag('span', 'style', /^background-color:.*$/i);
})();
