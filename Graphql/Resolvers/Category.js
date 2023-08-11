const Category = {
  products: (parent, args, { products }, info) => {
    //parent is the category object itself from the categories array
    const { id } = parent;
    const category = products.filter((product) => product.category === id);
    return category;
  },
};

export default Category;
