
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/woland/caltech-crypto/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/home/woland/caltech-crypto/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/woland/caltech-crypto/src/pages/index.jsx"))
}

