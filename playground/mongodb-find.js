
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(error, client)=>{
    if(error){
        console.log('Unable to connect to MongoDB server');
        return;
    }
    var db = client.db('TodoApp');
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b6c53951df952255ca45770')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // });
    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count ',count);
    },(err)=>{
        console.log('Unable to count todos ',err);
    });

    
    //client.close();
});