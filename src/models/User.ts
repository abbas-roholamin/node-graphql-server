/** @format */
import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  email: string;
  password: string;
  name?: string;
}

const UserSchema: Schema<User> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },
});


export const User = mongoose.model<User>("User", UserSchema);
