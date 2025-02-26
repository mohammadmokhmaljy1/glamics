import api from "./axiosInstance";

export function GetAllProducts() {
  return api.get("product/get-products")
}

export function GetAllCatiguries() {
  return api.get("product/get-categories")
}

export function GetSingleProduct(id) {
  return api.get(`product/get-single-product/${id}`)
}