const htmlReplace = require('../src')
const fs = require('fs')
const assert = require('chai').assert
const path = require('path')
const join = dir => path.join(__dirname, dir)
describe('html src replace', function () {
  const sourceMap = {
    'href-foo': 'hello',
    'hello': 'hello-foo',
    'src-img-foo': 'hello',
    'href-svg-foo': 'hello',
    'data-foo': 'hello'
  }
  it('should replace src', function (done) {
    fs.readFile(join('./index.html'), 'utf-8', function (err, html) {
      if (err) done(err)
      const result = htmlReplace(html, sourceMap)
      fs.readFile(join('./result.html'), 'utf-8', function (err, html) {
        if (err) done(err)
        const expectResult = html
        assert.equal(result, expectResult)
        done()
      })
    })
  })
  it('should throw type error if not string', function () {
    assert.throw(function () {
      htmlReplace({}, sourceMap)
    }, TypeError)
  })
})
