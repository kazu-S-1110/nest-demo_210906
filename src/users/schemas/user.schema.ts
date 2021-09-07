import * as mongoose from 'mongoose';

// スキーマを定義する
export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true }, //同じ名前を許さない
  },
  password: {
    type: String,
    required: true,
  },
});
