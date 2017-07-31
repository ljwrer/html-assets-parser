# html-assets-parser
a simpale and fast html assets url parser

## Example

``` javascript
const parser = require("html-assets-parser");
const sourceMap = {
    "href-foo":"hello",
    "src-js-foo":"hello",
    "src-img-foo":"hello",
    "href-svg-foo":"hello",
    "data-foo":"hello"
}
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<link rel="stylesheet" href="href-foo">
<link rel="stylesheet" href="href-bar">
<h1>hello</h1>
<script src="src-js-foo"></script>
<script src="src-js-bar"></script>
<img src="src-img-foo">
<img src="src-img-bar">
<svg>
    <use xlink:href="href-svg-foo"></use>
    <use xlink:href="href-svg-bar"></use>
</svg>
<div data-videomp4="data-foo"></div>
<div data-videomp4="data-bar"></div>
<p>pass</p>
<div>pass</div>
</body>
</html>
`
const result = parser(html,sourceMap)
```
result is 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<link rel="stylesheet" href="hello">
<link rel="stylesheet" href="href-bar">
<h1>hello</h1>
<script src="hello"></script>
<script src="src-js-bar"></script>
<img src="hello">
<img src="src-img-bar">
<svg>
    <use xlink:href="hello"></use>
    <use xlink:href="href-svg-bar"></use>
</svg>
<div data-videomp4="hello"></div>
<div data-videomp4="data-bar"></div>
<p>pass</p>
<div>pass</div>
</body>
</html>
```



## License

MIT (http://www.opensource.org/licenses/mit-license.php)
