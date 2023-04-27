const { User }  = require( './user.model');

const getAttributes = { exclude: ['password'] };

const getAll = async () => {
  try {
    return await User.findAll({ attributes: getAttributes });
  } catch (error) {
    throw new Error();
  }
};

const getUserById = async (id) => {
  try {
    return await User.findOne({ where: { id }, attributes: getAttributes });
  } catch (error) {
    throw new Error(error);
  }
};

const getUserByLogin = async (login) => {
  try {
    return await User.findOne({ where: { login } });
  } catch (error) {
    throw new Error(error);
  }
};

const setUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user.id ? user.id : '';
  } catch (error) {
    throw new Error(error);
  }
};

const updateUserById = async (id, userData) => {
  try {
    const result = await User.update(userData, { where: { id }, returning: true });
    return result[1][0];
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUserById = async (id) => {
  try {
    return await User.destroy({ where: { id } });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAll,
  getUserById,
  getUserByLogin,
  setUser,
  updateUserById,
  deleteUserById,
};
