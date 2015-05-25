var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 9999,
    appname: "MEN",
    session: {
        key: "asdklghakjhsadd21721973hsa1892",
        maxage: 1800000,
        expires: 1800000
    }
};
