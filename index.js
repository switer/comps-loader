'use strict'

var comps = require('comps')
var fs = require('fs')
var path = require('path')
var qs = require('querystring')
function noop () {}

var resolver = noop

comps.componentLoader(function (name) {
    var request = resolver(name) || path.join(process.cwd(), 'c', name, name, '.tpl')
    return {
        request: request,
        content: fs.readFileSync(request, 'utf-8')
    }
})
function loader(source) {
    var query = {}
    if (this.resourceQuery) {
        query = qs.parse(this.resourceQuery.replace(/^\?/, ''))
    }
    var result = comps({
        context: this.context,
        template: source,
        pagelet: query.pagelet
    })
    return 'module.exports = ' + JSON.stringify(result)
}
loader.resolve = function (fn) {
    resolver = fn
}
module.exports = loader