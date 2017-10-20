var admin = require('mongodb');
var shell = require('shelljs');
var moment = require('moment');
var config = require('./config');
var firebase = require('../firebase');
var serve = require('../express');
var ObjectID = admin.ObjectID;
var firebaseAdmin = firebase.run();

function run() {
    admin.MongoClient.connect(config.url, function(error, database) {
        if (error) {
            throw error;
        }

        mongoDB = database;
        __fillFirebaseFromMongoDBIfIsFirstTimeOrStartFirebaseListening(database);
    });
}

function __fillFirebaseFromMongoDBIfIsFirstTimeOrStartFirebaseListening(database) {
    database.listCollections().toArray(function(error, collections) {
        if (__validateIfIsTheFirstTime(collections)) {
            database.createCollection('first', function(error, result) {
                if (error) {
                    throw error;
                }

                __fillFirebaseFromMongoDB(database);
            });
        } else {
            serve(firebaseAdmin, moment);
            firebase.listen(firebaseAdmin, database, moment);
        }
    });
}

function __validateIfIsTheFirstTime(collections) {
    for (collection in collections) {
        if (collections[collection].name === 'first') {
            return false;
        }
    }

    return true;
}

function __fillFirebaseFromMongoDB(database) {
    console.log('-> Filling Firebase');
    __fillFirebase(database);
}

function __getObject(data) {
    var object = {
        meta: data.meta,
        profile: data.profile
    };

    object.meta.request_ts = new Date(object.meta.request_ts).getTime() / 1000;
    object.meta.request_ts_micro = new Date(object.meta.request_ts_micro).getTime() / 1000;
    return object;
}

function __fillFirebase(database) {
    database.collection('results').find({}).toArray(function(error, result) {
        if (error) {
            throw error;
        }

        var object = null;
        var promises = [];

        for (key in result) {
            object = __getObject(result[key]);

            promises.push(new Promise(function(resolve, reject) {
                firebaseAdmin.database().ref('results').push(object).then(function() {
                    resolve(true);
                });
            }));
        }

        Promise.all(promises).then(function(values) {
            console.log('-> Filling Firebase status: OK');
            database.close();
        }).then(function() {
            shell.exec('npm start');
        });
    });
}

module.exports = run;
