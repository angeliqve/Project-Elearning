import { UserData } from '../models/user-model';
const userRepository = require('../repositories/user-repository');

// cari user berdasarkan ID
exports.findUserById = async (id: string): Promise<UserData | null> => {
  return await userRepository.findById(id);
};

// ambil semua user
exports.getUsers = async (): Promise<UserData[]> => {
  return await userRepository.getAllUsers();
};

// update user berdasarkan ID
exports.updateUserById = async (
  id: string,
  input: Partial<UserData>,
): Promise<UserData | null> => {
  return await userRepository.updateUser(id, input);
};

// hapus user berdasarkan ID
exports.deleteUserById = async (id: string): Promise<UserData | null> => {
  return await userRepository.deleteUser(id);
};
