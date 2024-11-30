/** @format */

const authSchema = `#graphql
  type Mutation {
    signup(name: String!, email: String!, password: String!): String!
    signin(email: String!, password: String!): String!
  }
`

export default authSchema
