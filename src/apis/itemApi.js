const BASE_URL = "http://192.168.164.107:8081";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  console.log("상품 데이터:", data);

  return data;
};

export const getCategoryItems = getProducts;

export const getPriceSelectedItems = getProducts;

export const getSortedItems = getProducts;

/*
const BASE_URL = "http://192.168.164.107:8081";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  return data;
};



export const getCategoryItems = async () => {
  const response = await fetch("http://192.168.164.107:8081/products");
  const data = await response.json();

  return data;
};

export const getPriceSelectedItems = async () => {
  const response = await fetch("http://192.168.164.107:8081/products");
  const data = await response.json();

  return data;
};

export const getSortedItems = async () => {
  const response = await fetch("http://192.168.164.107:8081/products");
  const data = await response.json();

  return data;
};


/*
const BASE_URL = "http://192.168.164.107:8081";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  return data;
};
*/
