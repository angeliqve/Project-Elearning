import { Request, Response } from 'express';

const userService = require('../services/user-service');
;
exports.index = async (req: Request, res: Response) => {
  try {
    const userData = userService.getUsers();

    if (!userData || userData.length === 0){
      return res.status(404).json({
        statusCode: 404,
        message: 'Data user tidak ditemukan'
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Sukses mendapatkan user!',
      data: userData,
    });
  } catch (error: any) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// add user
exports.store = async(req: Request, res: Response) =>{
  const userData = req.body;

  const addUser = userService.addUser(userData);

  if(!addUser || addUser.length === 0 || Object.keys(addUser)){
    return res.status(400).json({message: 'Gagal menambahkan data'});
  }

  return res.status(200).json({
    message: ' Berhasil tambah data',
    data: userData
  });
};
