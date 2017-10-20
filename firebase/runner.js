var admin = require('firebase-admin');
var config = require('./config');

function run() {
    admin.initializeApp({
        credential: config.credential(admin),
        databaseURL: config.url
    });

    return admin;
}

module.exports = run;
