export const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: 'John Smith', status: 'active' }
    },
    fooUser(_parent, _args, _context, _info) {
      return { id: 1, name: 'John Smith', status: 'active', foo: { id: 2, name: 'test'  } }
    },
  },
}
