const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
        minLength: 1,
        trim: true,
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not an email'
        }
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    tokens:[
        {
            access:{
                type: String,
                require: true
            },
            token:{
                type: String,
                require: true
            }
        }
    ],
    name:{
        type: String,
        require: true,
        minLength: 1
    }
});

userSchema.methods.toJSON = function(){
    var user = this;
    var userObject= user.toObject();
    return _.pick(userObject,['_id','name','email'])
}

userSchema.methods.generateAuthToken = function (){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
    user.tokens.push({access,token});
    return user.save().then(()=>{
        return token;
    }).catch((error)=>{
       res 
    });
};

var User = mongoose.model('User',userSchema);

module.exports = {User};