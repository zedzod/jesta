var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Task     = new Schema({
 id: { 
     type:Number,
     index:1,
     required:true
    },
userName:{
        type:String,
        required:true
    },
 Mission: {
     type: String,
     required:true
 },
 Description: {
     type:String,
     required:true
 },
 Date: {
     type: String, 
     required: true
 },
 Time: {
     type:String,
     required:true
 },
Points: {
    type:Number,
    required:true
},
isTaked: {
    tybe:Boolean,
    default:false
},
Invited: {
    type: [String],
    required:true
}
 },{collection: 'tasks'});


 Task.path('Points').validate(
     (val) => {
         console.log(`\n validating Points ${val}`);
         let iVal = Number(val);
         return iVal >= 5 && iVal <= 20;
             }, "the points should be between 5 and 20!");
 
 Task.pre('save',
     (next) => {
         console.log(`\n you now saved a new task dont forget to delete it!\n`);
         return next();
 });

            

 module.exports = mongoose.model('tasks', Task);
