import { Request, Response } from 'express';

const userService = require('../services/user-service');
;
exports.index = async (req: Request, res: Response) => {
  try {
    const userData = userService.getUsers();

    return res.status(200).json({
      statusCode: 200,
      message: 'Sukses mendapatkan user!',
      data: userData,
    });
  } catch (error: any) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
