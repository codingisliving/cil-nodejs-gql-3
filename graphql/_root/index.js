const queries = require('./queries');
const mutations = require('./mutations');

const rootSchema = ` 
  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = {
    resolvers: {
        ...queries.resolvers,
        ...mutations.resolvers,
    },
    schemas: [
        queries.schemas,
        mutations.schemas,
        rootSchema
    ].reduce((acc, types) => { return acc + types })
}
