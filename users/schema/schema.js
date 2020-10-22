const graphql = require('graphql');
const axios = require('axios');
const { response } = require('express');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;

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
        return axios.get(`http://localhost:3000/users/${args.id}`)
        .then(response => response.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})