const os = require('node:os');
console.log(os.hostname());
console.log(os.version());
console.log(os.totalmem());
console.log(os.cpus().length);


const { unlink } = require('node:fs/promises');

(async function (path) {
    try {
        await unlink(path);
        console.log(`successfully deleted ${path}`);
    } catch (error) {
        console.error('there was an error:', error.message);
    }
})('/tmp/hello');
