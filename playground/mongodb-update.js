const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5bc34b84be9c496b9e1b6cdd")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bc2aaa3164f130465939a9e")
  }, {
    $set: {
      name: 'Jonathan'
    },   
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result)
  })

  // client.close()
})
