const {  Schema, model } = require("mongoose");

const userSchema = new Schema(
  {

    name:String,
    username:String,
    user_image: String,
    email: String,
    password: String,
    imagefile:{},
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports =  model("User", userSchema);

