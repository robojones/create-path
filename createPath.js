const mkdirp = require('mkdirp')

module.exports = createPath;

function createPath(dir, opts, cb) {
  return new Promise((resolve, reject) => {
    mkdirp(dir, opts, (err, made) => {
      if(err) {
        reject(err)
      } else {
        resolve(made)
      }
    })
  })
}
