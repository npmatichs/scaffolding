let express = require('express');
let app = express();
let session = require('express-session');
require('env/loader').setEnv(require('./.env'));
let env = require('env');

app.listen(env('port', 8080), () => {
    console.log(`Server listening on http://localhost:${env('port', 8080)}/ !`);
});

module.exports = app;