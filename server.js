// when in production mode, use the minified version; it's much, much faster.
if (process.env.NODE_ENV === 'production') {
  const { renderToString, renderToStaticMarkup } = require('./dist/react.min')
  module.exports = { renderToString, renderToStaticMarkup }
} else {
  const { renderToStringStream: renderToString, renderToStaticMarkupStream: renderToStaticMarkup } = require('./lib/ReactDOMServer')
  module.exports = { renderToString, renderToStaticMarkup }
}
