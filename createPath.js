const path = require('path');
const fs = require('fs');

module.exports = createPath;

function createPath(wd, pth) {
    return new Promise((resolve, reject) => {
        const cwd = Array.isArray(wd) ? wd.concat() : wd.split(path.sep);
        const parts = Array.isArray(pth) ? pth.concat() : pth.split(path.sep);
        createDir();

        function createDir() {
            const p = parts.shift();
            fs.mkdir(path.join(cwd.join(path.sep), p), (err) => {
                if(err && err.code !== 'EEXIST') {
                    reject(err);
                    return;
                }
                cwd.push(p);
                if(parts.length) {
                    process.nextTick(createDir);
                } else {
                    resolve(cwd.join(path.sep));
                }
            });
        }
    });
}
