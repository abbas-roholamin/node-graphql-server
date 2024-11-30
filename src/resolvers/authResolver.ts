/** @format */

import { signup, signin } from "../services/authService.js"

const authResolver = {
  Mutation: {
    signup: async (
      _: any,
      args: { name: string; email: string; password: string },
    ) => {
      return signup(args.name, args.email, args.password)
    },
    signin: async (_: any, args: { email: string; password: string }) => {
      return signin(args.email, args.password)
    },
  },
}

export default authResolver
