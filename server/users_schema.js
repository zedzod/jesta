var mongoose = require('mongoose'),
    user     = new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        performTasks:{
            type:String
        },
        createdTasks:{
            type:String
        },
        points:{
            type:Number
        },
        rank:{
            type:String
        },
    });

    module.exports = mongoose.model('users', user);
