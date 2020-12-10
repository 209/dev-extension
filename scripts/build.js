const tasks = require('./tasks');

console.log('[Copy assets]');
console.log('-'.repeat(80));
tasks.copyAssets('build');
tasks.copyTinymceSkins('build');

console.log('[Webpack Build]');
console.log('-'.repeat(80));
exec('webpack --watch --config webpack/prod.config.js --progress --profile --color');
