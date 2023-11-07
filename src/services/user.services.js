const  User  = require("../models/user.models")

class UserServices {
    static async create (newUser) {
        try {
            const result = await User.create(newUser);
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await User.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getOne(id) {
        try {
            const result = await User.find(id)
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;