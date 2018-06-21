/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://karthikchow:amma99@ds143778.mlab.com:43778/db-kar';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("db-kar");
    dbase.createCollection("college", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");

        db.close();
    });
});
