// employeeDao.js

const User = require('../models/userModel');

async function findAll() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(`Error while fetching users: ${error.message}`);
  }
}

async function getUserById(id) {
  try {
    const user = await User.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user; // Return the employee object directly
  } catch (error) {
    throw new Error(`Error while fetching user details: ${error.message}`);
  }
}

module.exports = {
  findAll,
  getUserById,
};
