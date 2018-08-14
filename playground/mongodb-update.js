const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("Couldn't Connect to Mongo");
    }
    var db = client.db('TodoApp');
    console.log('Connected to Mongo');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b6c4a561d3a4800d82cb54c')
    // }, {
    //         $set: {
    //             complete: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).catch((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b6c4e724fa8fe39e8d3808a')
    },{
        $set:{
            name: "Ahmed Mohamed Rashad",
            
        }
    },{
        returnOriginal:false
    }).catch((result)=>{
        console.log(result)
    });
});