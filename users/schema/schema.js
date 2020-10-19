const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const Usertype = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: GraphQLString },
      firstName: { type: GraphQLString },
      age: { type: graphql.GraphQLInt } 
    }
})