const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(error,client)=>{
    if(error){
        return console.log("Couldn't connect to mongo");
    }
    var db = client.db('TodoApp');
    console.log('Mongo connection successful');

    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:'to delete'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({complete: true}).then((result)=>{
    //     console.log(result);
    // });


    // db.collection('Users').deleteMany({name: 'Ibrahim Mamdouh'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b6c90e9e285ad1a5417e2be')}).then((result)=>{
        console.log(result);
    });
});