const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then(result => {
//   console.log(result)
// })

Todo.findOneAndRemove({_id: '5bc54993be9c496b9e1b8632'}).then(todo => {
  
})

Todo.findByIdAndRemove('5bc54993be9c496b9e1b8632').then(todo => {
  console.log(todo)
})
