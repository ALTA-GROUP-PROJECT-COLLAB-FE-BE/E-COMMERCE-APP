// tambahkan item ke cart

export const addCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

// Menghapus Product
export const delCart = (product) => {
  return {
    type: "DEL_PRODUCT",
    payload: product,
  };
};
