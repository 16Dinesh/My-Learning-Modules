const Product = require("../models/productModel");
const Post = require("../models/postModel");

const resolvers = {
  Query: {
    products: async () => {
      const result = await Product.find();
      console.log("Fetched products:", result);
      return result;
    },
    posts: async () => {
      const result = await Post.find();
      console.log("Fetched posts:", result);
      return result;
    },
  },
  Mutation: {
    createProduct: async (_, { name, price }) => {
      console.log("Creating product:", name, price);
      const product = new Product({ name, price });
      const saved = await product.save();
      console.log("Saved product:", saved);
      return saved;
    },
    createPost: async (_, { title, content }) => {
      console.log("Creating post:", title, content);
      const post = new Post({ title, content });
      const saved = await post.save();
      console.log("Saved post:", saved);
      return saved;
    },
  },
};

module.exports = { resolvers };
