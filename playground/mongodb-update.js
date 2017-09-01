// const MongoClient = require('mongodb').MongoClient;
// Destructuring assignment
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to Mongodb Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('599e1f68c758d257f0f753ea')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOrignal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('599d0867658a120e7d6c67c6')
    }, {
        $set: {
            name: "Jim"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOrignal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
