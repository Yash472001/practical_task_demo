const { findUserById,getAllCollection ,createCollection,updateCollection,deleteCollection} = require("./db/dbmethod/dbMethods.js");


exports.resolvers = {
  Query: {
    async getCollection(root, { _id }) {
      return await findUserById(_id);
    }, // new
    async allCollection() {
      return await getAllCollection();
    }
  },
  Mutation: {
    async createCollection(root, { input }) {
      return await createCollection(input);
    },
    async updateCollection(root, { _id, input }) {
      return await updateCollection(_id , input);
    },
    async deleteCollection(root, { _id }) {
      return await deleteCollection( _id );
    }
  }
};