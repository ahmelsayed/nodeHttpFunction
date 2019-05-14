const { exec } = require('child_process');

module.exports = function (context, req) {
    exec('uname -a', (err, stdout, stderr) => {
        context.res = {
            body: stdout
        };
        context.done();
    });
};
