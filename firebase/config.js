var key = require('./key.json');

module.exports = {
    url: 'https://multi-development.firebaseio.com',
    credential: function(admin) {
        return admin.credential.cert(key);
    }
}
