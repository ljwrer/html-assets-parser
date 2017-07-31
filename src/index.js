const attrParse = require('./attributesParser');
const replace = require('./replace');

const tagMap = {
  script: 'src',
  img: 'src',
  link: 'href',
  div: 'data-videomp4',
  use: 'xlink:href',
};

module.exports = function parse(html, sourceMap) {
  const replaceList = attrParse(html, (tag, attr) => tagMap[tag] === attr);
  return replace(html, replaceList, sourceMap);
};
