let AWS = require('aws-sdk');
let SL_GCP = require('slappforge-sdk-gcp');
let sqlConnMgr = require('./SqlConnMgr');
const sql = new SL_GCP.SQL(sqlConnMgr);

exports.handler = function (event, context, callback) {
    // You must always end/destroy the DB connection after it's used.
    sql.beginTransaction({
        instanceIdentifier: 'test-instance-2'
    }, function (error, connection) {
        if (error) {
            throw error;
        }
        else {
            console.log("pass");
        }
        connection.end();
    });

    callback(null, 'Successfully executed');
}