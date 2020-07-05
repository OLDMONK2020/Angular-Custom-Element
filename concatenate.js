const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './_RELEASE/runtime-es2015.js',
        './_RELEASE/polyfills-es2015.js',
        './_RELEASE/scripts.js',
        './_RELEASE/main-es2015.js',
    ]
    var dir = './_RELEASE/elements';
    if(!fs.existsSync(dir)){
        await fs.mkdirSync(dir);
    }
    await fs.ensureDir('elements')
    await concat(files, './_RELEASE/elements/element.js')
    await fs.copyFile('./_RELEASE/styles.css', './_RELEASE/elements/style.css')
   // await fs.copy('./_RELEASE/assets/', './_RELEASE/elements/assets/')
   // await fs.copy('./_RELEASE/core/', './_RELEASE/elements/core/')
})()