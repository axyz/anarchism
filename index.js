// External Impure Components
exports.Intreact = require('intreact').default;
exports.Rezponsive = require('rezponsive').default;

// External Pure Components
exports.Callout = require('react-callout').default;
exports.Zlide = require('react-zlide').default;
exports.Zoom = require('react-zoom').default;

// Internal Components (components folder)
const req = require.context('./components', true, /^.*\/([^\/]+)\/\1\.jsx$/);

function camelCase(string) {
    return string.split('-').map(el => el[0].toUpperCase() + el.slice(1)).join('');
}

req.keys().forEach(path => {
    const baseName = path.replace(/^.*\/([^\/]+)\.jsx$/, '$1');
    const componentName = camelCase(baseName);
    exports[componentName] = req(path).default;
});
