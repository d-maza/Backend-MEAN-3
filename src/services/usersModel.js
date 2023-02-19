const User = require('../models/userSchema')

// Petición a la bddd de añadir usuario
exports.add_user  = async (body) => {
  const user = new User(body);
   return await User.create(user); 
}

exports.get_eou = async (eou, password) => {

 data = await User.findOne({  'username': eou , 'password': password},{'password':0});
 if (data === null) {
   data = await User.findOne({ 'email': eou, 'password': password }, { 'password': 0 });
  }
  return data
};


// Petición a la bddd de editar foto y nombre de foto del usuario
exports.edit_user = async (id, picture) => {

  const filter = { '_id': id };
  const update = { 'user_image': picture.name, 'imagefile': picture };
  await User.findOneAndUpdate(filter,update,{
    new: true
  });;
 return User.findOne({ '_id': id },{'password':0});
}













