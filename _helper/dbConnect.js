const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const url = 'mongodb://0.0.0.0:27017'
const mongoConnect =  async() => {
  await MongoClient.connect(url)
    .then(client => {
      console.log('Connected!');
      _db = client.db('alam');
     
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

module.exports={
    mongoConnect, getDb
}