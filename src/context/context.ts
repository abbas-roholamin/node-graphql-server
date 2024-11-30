/** @format */

import jwt from "jsonwebtoken"

const context = async ({ req, res }) => {
  console.log(req.body.operationName)

  if (
    req.body.operationName === "Movies" ||
    req.body.operationName === "Movie"
  ) {
    // get the user token from the headers
    const token = req.headers.authorization || ""

    // try to retrieve a user with the token
    try {
      if (token) {
        const user = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
        return { user }
      } else {
        throw new Error("Unauthorized")
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  return {}
}

export default context
