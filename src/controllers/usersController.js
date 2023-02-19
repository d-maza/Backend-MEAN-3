const userModel = require('../services/usersModel');
const config = require('../../config/config')



const usersCtrl = {};

// POST Registrar usuario 
usersCtrl.register_user = async (req, res) => {
  let body = req.body;
  try {
    await userModel.add_user(body);
    res.status(201).json({
      success: true,
      nemssage: 'usuario registrado correctamente',
    });
  } catch (error) {
    res.status(500).send({ 'ERROR :': error.message });
  }
};

// POST Login usuario
usersCtrl.login_users =  (req, res) => {

  const eou = req.body.eou;
  const password = req.body.password;

  try {

    const body =  userModel.get_eou(eou, password);
    res.status(200).json(data);

  } catch (error) {
    res.status(500).send({ 'ERROR :': error.message });
  }
};

// PUT Cambiar foto del usuario
usersCtrl.update_user = async (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      success: false,
      msg: 'Ningun archivo fue cargado.',
    });
  }

  const id = req.body.user_id;
  const picture = req.files.picture;
  
  try {

    picture.mv(config.uploadPathProd+ `${id}/${picture.name}`);
    const body = await userModel.edit_user(id, picture);
    res.json(body).status(200);

  } catch (error) {
    res.status(500).json({ 'ERROR :': error.message });
  }
};



module.exports = usersCtrl;
