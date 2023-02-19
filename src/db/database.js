const mongoose = require('mongoose');

// Si prefieres trabar en local cambia a uri_local
my_uri= `mongodb://127.0.0.1:27017/rlp`,

uri = '`mongodb://actiuhumaMongodb:rlpdatabase@127.0.0.1:27017/rlp'
mongoose.connect(my_uri)
  .then(() => console.log("🟢 La conexión MongoDB tuvo éxito."))
  .catch(err => console.log("🔴 Error en la conexión DB: " + err));  



