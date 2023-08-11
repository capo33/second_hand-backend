const typeDefs = `#graphql
  type MainCard {
    title: String!
    description: String!
    image: String!
  }

  type Product {
    id: ID!
    image: String!
    rating: Float! 
    title: String!
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean!
    slug: String!
    category: Category!
  }
  
  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    products: [Product!]!
  }

  type Query {
    mainCards: [MainCard!]!
    products: [Product!]!
    product(slug: String!): Product!
    categories: [Category!]!
    category(slug: String!): Category!
  }

  type Mutation {
    addProduct(
      image: String!
      rating: Float! 
      title: String!
      price: String!
      description: [String!]!
      stock: Int!
      onSale: Boolean!
      slug: String!
      category: String!
    ): Product

    addCategory(
      image: String!
      category: String!
      slug: String!
    ): Category!

    deleteProduct(id: ID!): Boolean!

    deleteCategory(id: ID!): Boolean!

    updateProduct(
      id: ID!
      image: String!
      rating: Float! 
      title: String!
      price: String!
      description: [String!]!
      stock: Int!
      onSale: Boolean!
      slug: String!
      category: String!
    ): Product!
    
    updateCategory(
      id: ID!
      image: String!
      category: String!
      slug: String!
    ): Category!
  }
  
`;
export default typeDefs;
