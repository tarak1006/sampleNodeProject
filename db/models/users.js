/*
 * Fill this method to create required tables for storing tickets.
 *
 * Also, this method should clear off any existing data.
 *
 * @param callback Send the err and result of the DDL operation appropriately
 // */
 // var mysql=require("mysql")
 // //var dbHelper = require("./../../src/models/databaseHelper");
 // var dbHelper = require("./databaseHelper");

 var mongoose=require('mongoose');
 // mongoose.connect('mongodb://localhost:27017/ticketdb');
 var Schema=mongoose.Schema;

 var UserSchema=new Schema({
   _id: {
       type: String,
       //enum: ['soap', 'rest'],
       //required: false,
   //minlength:10
   //maxlength:20
   //default:false --incase of cancelled tickets
   },
  phone:Number,
  username:String,
  firstname:String,
  lastname:String,
  age:Number,
  place:String,
  password:{
      type:String,
      required:true
  }

 });



console.log("control at model creation");
 module.exports=mongoose.model('User',UserSchema);
