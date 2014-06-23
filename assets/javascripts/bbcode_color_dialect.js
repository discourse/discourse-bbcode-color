(function() {
  Discourse.Dialect.inlineBetween({
    start: "[color=",
    stop:  "[/color]",
    rawContents: true,
    emitter: function(contents) {
      var matches = contents.match(/(.+)](.*)/);
      if (matches) {
        return ['span', {style: "color: " + matches[1] + ";"}, matches[2]];
      }
    }
  });
})();
