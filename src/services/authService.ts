/** @format */

import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { User } from "../models/User.js"

export const signup = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({ name, email, password: hashedPassword })
  await user.save()
  return jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "1h",
  })
}

export const signin = async (email: string, password: string) => {
  const user = await User.findOne({ email })
  if (!user) throw new Error("User not found")
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error("Invalid credentials")
  return jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "1h",
  })
}

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_PRIVATE_KEY)
