const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {ObjectID} = require('mongodb')
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(error)=>{
        
        res.status(400).send(error);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({
            todos: todos
        });
    })
},(error)=>{
    res.status(400).send(error);
});

app.post('/users',(req,res)=>{
    var body = _.pick(req.body,['email','password','name']);
    var user = new User(body);
    user.save(user).then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((error)=>{
        res.status(400).send(error);
    });
},(error)=>{
    res.status(400).send(error);
});



app.get('/users/me',authenticate,(req,res)=>{
    res.send(req.user)
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            console.log('No result found')
            res.status(404).send({
                result: 'not found'
            });
        }
        res.send({
            result: todo
        });
    }).catch((e)=>{
        res.status(500).send({
            error: e 
        });
    });
});

app.listen(port,()=>{
    console.log(`Started on port ${port}`)
});


