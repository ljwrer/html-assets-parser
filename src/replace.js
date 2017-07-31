const CODE = {
  pass: 0,
  pre: 1,
};
const sliceUp = function sliceUp(text, replaceList) {
  let cursor = 0;
  const cache = [];
  replaceList.forEach(({ start, length, value }) => {
    const preStr = text.slice(cursor, start);
    cursor = start + length;
    cache.push({
      code: CODE.pass,
      text: preStr,
    });
    cache.push({
      code: CODE.pre,
      text: value,
    });
  });
  cache.push({
    code: CODE.pass,
    text: text.slice(cursor),
  });
  return cache;
};
const rev = sourceMap => ({ code, text }) => {
  if (code === CODE.pre && text in sourceMap) {
    return sourceMap[text];
  }
  return text;
};
const replace = function replace(text, replaceList, sourceMap) {
  if (typeof text !== 'string') throw new TypeError('text must be a string');
  const list = sliceUp(text, replaceList);
  return list.map(rev(sourceMap)).join('');
};
module.exports = replace;
