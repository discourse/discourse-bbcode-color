import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["bbcode-color"] = true;
});

function replaceFontColor(text) {
  text = text || "";
  while (text !== (text = text.replace(/\[color=([^\]]+)\]((?:(?!\[color=[^\]]+\]|\[\/color\])[\S\s])*)\[\/color\]/ig, function (match, p1, p2) {
    return `<span style='color:${p1}'>${p2}</span>`;
  })));
  return text;
}

function replaceFontBgColor(text) {
  text = text || "";
  while (text !== (text = text.replace(/\[bgcolor=([^\]]+)\]((?:(?!\[bgcolor=[^\]]+\]|\[\/bgcolor\])[\S\s])*)\[\/bgcolor\]/ig, function (match, p1, p2) {
    return `<span style='background-color:${p1}'>${p2}</span>`;
  })));
  return text;
}

export function setup(helper) {
  helper.whiteList({
    custom(tag, name, value) {
      if (tag === 'span' && name === 'style') {
        return /^color:.*$/.exec(value);
      }
    }
  });
  helper.whiteList({
    custom(tag, name, value) {
      if (tag === 'span' && name === 'style') {
        return /^background-color:.*$/.exec(value);
      }
    }
  });

  helper.addPreProcessor(text => replaceFontColor(text));
  helper.addPreProcessor(text => replaceFontBgColor(text));
}
