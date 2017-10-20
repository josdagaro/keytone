var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb',
    parameterLimit: 1000000
}));

app.use(bodyParser.json());

function __getBuiltObject(body) {
    var object = {
        meta: {
            request_date: body['meta[request_date]'],
            'SERVER': JSON.parse(body['meta[SERVER]']),
            simple_url: body['meta[simple_url]'],
            url: body['meta[url]'],
            request_ts: body['meta[request_ts]'],
            request_ts_micro: body['meta[request_ts_micro]'],
            get: body['meta[get]'] || null,
            env: body['meta[env]'] || null
        },
        profile: JSON.parse(body['profile'])
    }

    object.meta.request_ts = new Date(object.meta.request_ts).getTime() / 1000;
    object.meta.request_ts_micro = new Date(object.meta.request_ts_micro).getTime() / 1000;
    return object;
}

module.exports = function __serve(firebaseAdmin, moment) {
    app.post('/firebase', function(request, response) {
        var body = request.body;
        var object = __getBuiltObject(body);
        firebaseAdmin.database().ref('results').push(object);
        console.log('-> New Firebase data inserted: ' + moment().format('YYYY-MM-DD H:mm:ss'));
        response.sendStatus(200);
    });

    app.listen(3000);
    console.log('-> Express server ready');
}
