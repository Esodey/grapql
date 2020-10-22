const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;

const users = [
  {id: '23', firstName: 'Bill', age: 20 },
  {id: '47', firstName: 'Samantha', age: 21 }
]

const Usertype = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt } 
    }
})


const RootQuery = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: Usertype,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})