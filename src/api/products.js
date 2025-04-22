import connection from ".";

export const fetcProductsAPI = async (params) => {
    const response = await connection.get('/products', { params });
    return response.data;
  };

export const fetchProductDetailAPI = async(id)=>{
    const response =await connection.get(`/products/${id}`);
    return response.data
}