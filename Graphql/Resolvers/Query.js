const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  products: (parent, args, { products }) => products,
  product: (parent, args, { products }, info) => {
    const { slug } = args;
    const product = products.find((product) => product.slug === slug);
    return product;
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }, info) => {
    const { slug } = args;
    const category = categories.find((category) => category.slug === slug);
    return category;
  },
};

export default Query;
