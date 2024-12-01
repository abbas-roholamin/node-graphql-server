/** @format */

import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false)
    const conn = await mongoose.connect(
      `mongodb+srv://abbas_roholamin:iQnvp7QJuf95EbNi@hdk.xzd5z.mongodb.net/?retryWrites=true&w=majority&appName=hdk`,
    )
    console.log("Mongoose Connection Successfully!")
  } catch (err) {
    console.log(err)
  }
}
