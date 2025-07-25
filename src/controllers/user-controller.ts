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

exports.store = async(req: Request, res: Response) =>{
  try {
    const userData = req.body;
  
    const addUser = userService.addUser(userData);
  
    if(!addUser){
      return res.status(400).json({message: 'Gagal menambahkan user'});
    }

    return res.status(200).json({
      message: ' Berhasil tambah user',
      data: addUser
    });
  } catch (error:any){
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.destroy = async(req: Request, res: Response) =>{
  try {
    const userId = req.params.id;

    const deleted = userService.deleteUser(userId);
  
    if(!deleted){
      return res.status(400).json({message: 'User tidak ditemukan'});
    }

    return res.status(200).json({
      message: 'Berhasil hapus user'
    });
  } catch (error:any){
    return res.status(500).json({ message: 'Internal server error' });
  }
};