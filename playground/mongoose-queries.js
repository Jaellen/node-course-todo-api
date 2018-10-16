const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// var id = '5bc53066fbba2a0010988675'

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos)
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo By ID', todo)
// }).catch(e => console.log(e))

var id = '5bc4fb2da4c492e40db4f95a'

User.findById(id).then(user => {
  if (!user) {
    return console.log('User not found')
  }

  console.log(JSON.stringify(user, undefined, 2))
}, e => {
  console.log(e)
})
