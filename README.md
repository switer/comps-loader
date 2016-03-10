# comps-loader
Comps template loader for webpack.

# Usage

```bash
npm install comps-loader --save-dev
```

Using with webpack:
```js
loaders:[{
    test: /\.tpl$/,
    loader: 'comps-loader'
}]
```

Set component path resolver: 
```js
var compsLoader = require('comps-loader')
compsLoader.resolve(function (name) {
    return path.join('/path/to/components', name, name, '.tpl')
})
```


## Plugins

#### WebpackQueryPlugin(webpack, seperator, test)

    Syntax sugar for webpack-loader with query. It replace `require(./a.tpl??pagelet=b)` with `require(comps?pagelet=b!./a.tpl)`

    **??** is the **seperator**`<String>` param, and the **test**`<RegExp>` param is using to filtrate unmatch files.

