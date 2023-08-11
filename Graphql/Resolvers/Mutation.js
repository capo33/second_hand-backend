import { uuid } from "../../utils/index.js";

const Mutation = {
  addProduct: (
    parent,
    { image, rating, title, price, description, stock, onSale, slug, category },
    { products }
  ) => {
    const product = {
      id: uuid(),
      image,
      rating,
      title,
      price,
      description,
      stock,
      onSale,
      slug,
      category,
    };
    products.push(product);
    return product;
  },

  addCategory: (parent, { image, category, slug }, { categories }) => {
    const newCategory = {
      id: uuid(),
      image,
      category,
      slug,
      products: [],
    };
    categories.push(newCategory);
    return newCategory;
  },

  deleteProduct: (parent, { id }, { products }) => {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) throw new Error("Product not found");
    products.splice(index, 1);
    return true;
  },

  deleteCategory: (parent, { id }, { categories }) => {
    const index = categories.findIndex((category) => category.id === id);
    if (index === -1) throw new Error("Category not found");
    categories.splice(index, 1);
    return true;
  },

  updateProduct: (
    parent,
    { id, image, rating, title, price, description, stock, onSale, slug, category },
    { products }
  ) => {
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) throw new Error("Product not found");
    const product = products[index];
    products[index] = {
      ...product,
      image,
      rating,
      title,
      price,
      description,
      stock,
      onSale,
      slug,
      category,
    };
    return products[index];
  },

};

export default Mutation;
