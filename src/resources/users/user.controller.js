const usersModel  = require( './user.db.repository');

const getAll = () => usersModel.getAll();
const getUserById = (id) => usersModel.getUserById(id);
const getUserByLogin = (login) => usersModel.getUserByLogin(login);

const setUser = async (userData) => {
  const user = await getUserByLogin(userData.login);

  if (user || !userData.password) {
    return '';
  }

  const userId = await usersModel.setUser(userData);

  return userId;
};

const updateUserById = async (id, userData) => {
  const user = await getUserByLogin(userData.login);

  if (user) {
    return null;
  }

  let newUserData = { ...userData };

  if (userData.password) {
    const hash = myCrypt.hashPassword(userData.password);
    newUserData = { ...userData, password: hash };
  }
  return usersModel.updateUserById(id, newUserData);
};

const deleteUserById = (id)=> usersModel.deleteUserById(id);

const checkUserAuth = async (login, password) => {
  if (!login || !password) {
    return null;
  }
  const user = await usersModel.getUserByLogin(login);

  if (!user) {
    return null;
  }

  const isCheck =password===user.password;

  return isCheck ? user : null;
};

module.exports = {
  getAll,
  getUserById,
  getUserByLogin,
  setUser,
  updateUserById,
  deleteUserById,
  checkUserAuth
};
