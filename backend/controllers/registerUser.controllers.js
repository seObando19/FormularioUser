const operations = {};
const User = require('../models/registerUser');

/* saludo */
operations.hello = (req, res) =>{
    res.send('Welcome to work');
}
/* get all users */
operations.getUsers = async (req, res) =>{
    const users = await User.find();
    res.status(200).json(users);
}
/* get one users */
operations.getOneUser = async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
}
/* create new user */
operations.createUser = async (req, res) =>{
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({});
}
/* update to user */
operations.editUser = async (req, res) =>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    await user.save();
    res.status(200);
}
/* delete to user */
operations.deleteUser = async (req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.status(200);
}

module.exports = operations;