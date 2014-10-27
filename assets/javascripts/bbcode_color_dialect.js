(function() {
  Discourse.Dialect.inlineBetween({
    start: "[color=",
    stop:  "[/color]",
    rawContents: true,
    emitter: function(contents) {
      var matches = contents.match(/(.+)](.*)/);
      if (matches) {
        return ['font', {color: matches[1]}, matches[2]];
      }
    }
  });
  Discourse.Markdown.whiteListTag('font', 'color', /\w+/);
  Discourse.Markdown.whiteListTag('font', 'color', /#[0-9A-Fa-f]+/);
})();
