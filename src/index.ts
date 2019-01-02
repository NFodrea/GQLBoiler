import {GraphQLServer} from 'graphql-yoga';

// type refs <- schems
const typeDefs = `
    type Query {
        hello: String!
    }
`

// resolvers

const resolvers = {
    Query: {
        hello() {
            return 'hello world'
        }
    }
}

const server = new GraphQLServer({
    resolvers,
    typeDefs,
})

server.start(() => {
    console.log("server started");
});
