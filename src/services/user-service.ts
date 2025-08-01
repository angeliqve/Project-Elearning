const userData = require('../data/users');

exports.getUsers = () => {
  return userData || [];
};

exports.addUser = (user: any) => {
  if(!user) return null;

  const newUser = {
    id: userData.length+1,
    username: user.username,
    email: user.email,
    tanggalLahir: user.tanggalLahir,
    sudahLulus: user.sudahLulus,
    skorKeseluruhan: user.skorKeseluruhan
  };

  userData.push(newUser);

  return newUser;
};

exports.deleteUser = (id: number) => {
  for (let i = 0; i < userData.length; i++) {
   if (userData[i].id === Number(id)) {
      userData.splice(i, 1); 
      return true;
    }
  }

  return false;
};