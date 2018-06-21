/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://karthikchow:amma99@ds143778.mlab.com:43778/db-kar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("db-kar");
    dbase.collection("newCollection").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
