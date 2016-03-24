# comps-loader
[![npm version](https://badge.fury.io/js/comps-loader.svg)](https://badge.fury.io/js/comps-loader)

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


## API

#### use(comps)

- **Param**: comps`<Function>` Comps module.

Custom **Comps** module instance, if has more than one Comps instance, default `require("comps")`.

#### resolve(resolver)

- **Param**: resolver`<Function>`

Define resolve method use to get component's file path by name, which receiving a "name" argument.

## Plugins

#### WebpackQueryPlugin(webpack, seperator, test)

Syntax sugar for webpack-loader with query. It replace `require(./a.tpl??pagelet=b)` with `require(comps?pagelet=b!./a.tpl)`

**??** is the **seperator**`<String>` param, and the **test**`<RegExp>` param is using to filtrate unmatch files.

