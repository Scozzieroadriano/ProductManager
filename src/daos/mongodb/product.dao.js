import { ProductModel } from "./models/product.model.js";

export default class ProductDaoMongoDB {
  async getAll(page = 1, limit = 5) {
    try {

      const response = await ProductModel.paginate({}, { page, limit });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const response = await ProductModel.findById(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async create(obj) {
    try {
      const products = await ProductModel.find();
      if (products.some(product => product.code === obj.code)) {
        const alert = { message: `Ya existe un producto con el código: ${obj.code}` }
        return alert
      } else {
        const response = await ProductModel.create(obj);
        return response;
      }
    } catch (error) {
      console.log(error,);
    }
  }

  async update(id, obj) {
    try {
      const response = await ProductModel.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const response = await ProductModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}