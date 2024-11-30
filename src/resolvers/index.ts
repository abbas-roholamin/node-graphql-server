import authResolver from "./authResolver.js";
import movieResolver from "./movieResolver.js";



const resolvers = [
    authResolver,
    movieResolver
];

export default resolvers;