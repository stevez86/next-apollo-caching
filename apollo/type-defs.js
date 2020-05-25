import gql from 'graphql-tag'

export const typeDefs = gql`

    enum CacheControlScope {
        PUBLIC
        PRIVATE
    }

    directive @cacheControl(
        maxAge: Int
        scope: CacheControlScope
    ) on FIELD_DEFINITION | OBJECT | INTERFACE
  
    type Foo {
        id: ID!
        name: String!
    }
    
  type User {
    id: ID!
    name: String!
    status: String!
      foo: Foo!
  }

  type Query {
    viewer: User @cacheControl(maxAge: 1)
    fooUser: User @cacheControl(maxAge: 100)
  }
`
