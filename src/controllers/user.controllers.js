const UserServices = require('../services/user.services');

const userRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'insuficient data',
        })
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const users = await UserServices.getAll();
        res.json(users);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Something got wrong :(',
        })
    }
}

const getUser = async (req, res, next) => {
    try{
        const user = await UserServices.getOne();
        res.json(user);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Something got wrong :(',
        })
    }
}



module.exports = {
    userRegister,
    getAllUser,
    getUser,
}