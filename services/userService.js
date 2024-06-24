// employeeService.js

const userDao = require('../daos/userDao');
const UserDTO = require('../dtos/userDto'); // Ensure correct path
const User = require('../models/userModel')
async function getUsers() {
  try {
    const users = await userDao.findAll();
    return users.map(user => new UserDTO(user));
  } catch (error) {
    throw new Error(`Error in service layer while fetching users: ${error.message}`);
  }
}

async function getUserById(id) {
  try {
    const userDetails = await userDao.getUserById(id);
    return new UserDTO(userDetails);
  } catch (error) {
    throw new Error(`Error in service layer while fetching user details: ${error.message}`);
  }
}

async function updateUser(id, updatedUserData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return new UserDTO(updatedUser);
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
}


async function deleteUserById(id) {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return new UserDTO(deletedUser);
    } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
    }
}

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUserById
};
