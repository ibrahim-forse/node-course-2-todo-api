// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(error, client)=>{
    if(error){
        console.log('Unable to connect to MongoDB server');
        return;
    }
    var db = client.db('TodoApp');
    console.log('Conneted to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     complete: false
    // },(error, result)=>{
    //     if(error){
    //         consol.log('Unable to insert Todo');
    //         return;
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //    name: 'Ibrahim Mamdouh',
    //    age: 26,
    //    location: 'Cairo, Egypt'
    // },(error, result)=>{
    //     if(error){
    //         console.log('Unable to insert user');
    //         return;
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    client.close();
});