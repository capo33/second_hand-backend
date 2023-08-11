const Product = {
  category: (parent, args, { categories }, info) => {
    const category = categories.find(
      (categoryObject) => categoryObject.id === parent.category
    );
    return category;
  },
};

export default Product;
