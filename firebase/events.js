var isFirstTime = true;

module.exports = function __listen(firebaseAdmin, mongoDatabase, moment) {
    var ref = firebaseAdmin.database().ref('results');

    ref.limitToLast(1).on('child_added', function(snapshot, prevChildKey) {
        if (!isFirstTime) {
            var child = snapshot.val();
            child.meta.request_ts = new Date(child.meta.request_ts * 1000);
            child.meta.request_ts_micro = new Date(child.meta.request_ts_micro * 1000);

            mongoDatabase.collection('results').insertOne(child, function(error, response) {
                if (error) {
                    throw error;
                }

                console.log('-> New MongoDB data inserted: ' + moment().format('YYYY-MM-DD H:mm:ss'));
            });
        }

        isFirstTime = false;
    });

    console.log('-> Firebase listening');
}
