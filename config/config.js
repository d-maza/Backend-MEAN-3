
const config = {

  port: 3000,
  mongo_uri: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qmiyj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  mongo_uri_local: `mongodb://127.0.0.1:27017/${process.env.DBNAME}`,
  uploadPathProd: (__dirname).replace('\config', 'public/assets/image/'),
  uploadPathDev : `C:/xampp/htdocs/MEAN_3/Frontend-Mean-3/src/assets/image/`,

}


module.exports =  config ;