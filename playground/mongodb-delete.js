// const MongoClient = require('mongodb').MongoClient;
// Destructuring assignment
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Go to sleep'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Go to sleep'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    // db.close();
});
