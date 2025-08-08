import { User, UserData } from '../models/user-model';

exports.findByEmail = async (email: string): Promise<UserData | null> => {
  return await User.findOne({ email });
};

exports.createUser = async (userData: Partial<UserData>): Promise<UserData> => {
  const user = new User(userData);
  return await user.save();
};

exports.findById = async (id: string): Promise<UserData | null> => {
  return await User.findById(id);
};

exports.updateUserById = async (id: string, update: Partial<UserData>) => {
  return await User.findByIdAndUpdate(id, update, { new: true });
};

exports.deleteUserById = async (id: string) => {
  return await User.findByIdAndDelete(id);
};

exports.findById = async (id: string): Promise<UserData | null> => {
  return User.findById(id);
};

exports.getAllUsers = async (): Promise<UserData[]> => {
  return User.find();
};

exports.updateUser = async (
  id: string,
  data: Partial<UserData>,
): Promise<UserData | null> => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteUser = async (id: string): Promise<UserData | null> => {
  return await User.findByIdAndDelete(id);
};
