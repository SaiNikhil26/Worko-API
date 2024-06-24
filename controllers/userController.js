const User = require('../models/userModel');
const userService = require('../services/userService');

async function insertUser(req, res) {
    try {
        const { email, name, age, city, zipCode } = req.body;
        const newUser = new User({ email, name, age, city, zipCode });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getEditUserForm(req, res) {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        res.render('updateUserForm', { user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateUser(req, res) {
    const { id } = req.params;
    const { email, name, age, city, zipCode } = req.body;

    try {
        // Update employee using employeeService
        await userService.updateUser(id, { email, name, age, city, zipCode });
        res.redirect(`/worko/users/${id}`); // Redirect to employee details or appropriate page
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const deletedUser = await userService.deleteUserById(id);
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllUsers(req, res, next) {
    try {
        const users = await userService.getUsers();
        res.status(200).json({ users });
    } catch (error) {
        res.status(400).json({ error: error.message }); // Pass error to error handling middleware
    }
}

async function getUserById(req, res, next) {
    const { id } = req.params;

    try {
        const user = await userService.getUserById(id);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    insertUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    getEditUserForm
};
