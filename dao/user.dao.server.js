const userModel = require('../models/user.model.server')

createUser = user =>
  userModel.create(user)

findAllUsers = () =>
  userModel.find()

findUserById = userId =>
  userModel.findById(userId)

findUserByUsername = username =>
  userModel.findOne({username: username})

updateUser = (uid, user) =>
  userModel
    .update({_id: uid},
      {$set: user})

deleteUser = userId =>
  userModel
    .remove({_id: userId})


module.exports = {
  createUser,
  deleteUser,
  findUserByUsername,
  findAllUsers,
  updateUser,
  findUserById
}