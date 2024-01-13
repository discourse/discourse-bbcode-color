function replaceFontColor(text) {
  text ||= "";
  let previousText;

  do {
    previousText = text;
    text = text.replace(
      /\[color=([^\]]+)\]((?:(?!\[color=[^\]]+\]|\[\/color\])[\S\s])*)\[\/color\]/gi,
      (_, p1, p2) => `<span style='color:${p1}'>${p2}</span>`
    );
  } while (text !== previousText);

  return text;
}

function replaceFontBgColor(text) {
  text ||= "";
  let previousText;

  do {
    previousText = text;
    text = text.replace(
      /\[bgcolor=([^\]]+)\]((?:(?!\[bgcolor=[^\]]+\]|\[\/bgcolor\])[\S\s])*)\[\/bgcolor\]/gi,
      (_, p1, p2) => `<span style='background-color:${p1}'>${p2}</span>`
    );
  } while (text !== previousText);

  return text;
}

export function setup(helper) {
  helper.allowList({
    custom(tag, name, value) {
      if (tag === "span" && name === "style") {
        return /^(background-)?color:#?[a-zA-Z0-9]+$/.exec(value);
      }
    },
  });

  helper.registerOptions((opts) => {
    opts.features["bbcode-color"] = true;
  });

  if (helper.markdownIt) {
    helper.registerPlugin((md) => {
      const ruler = md.inline.bbcode.ruler;

      ruler.push("bgcolor", {
        tag: "bgcolor",
        wrap: function (token, endToken, tagInfo) {
          token.type = "span_open";
          token.tag = "span";
          token.attrs = [
            ["style", "background-color:" + tagInfo.attrs._default.trim()],
          ];
          token.content = "";
          token.nesting = 1;

          endToken.type = "span_close";
          endToken.tag = "span";
          endToken.nesting = -1;
          endToken.content = "";
        },
      });

      ruler.push("color", {
        tag: "color",
        wrap: function (token, endToken, tagInfo) {
          token.type = "span_open";
          token.tag = "span";
          token.attrs = [["style", "color:" + tagInfo.attrs._default.trim()]];
          token.content = "";
          token.nesting = 1;

          endToken.type = "span_close";
          endToken.tag = "span";
          endToken.nesting = -1;
          endToken.content = "";
        },
      });
    });
  } else {
    helper.addPreProcessor((text) => replaceFontColor(text));
    helper.addPreProcessor((text) => replaceFontBgColor(text));
  }
}
