// const MongoClient = require('mongodb').MongoClient;
// Destructuring assignment
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to unsert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Emmanuel Garcia',
    //     age: 29,
    //     location: 'Houston, TX'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert new user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
});
