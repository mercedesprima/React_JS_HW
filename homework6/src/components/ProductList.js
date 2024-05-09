import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../reducers/productsSlice";
import UpdateProduct from "./UpdateProduct";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [updateProductId, setUpdateProductId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdate = (id) => {
    setUpdateProductId(id === updateProductId ? null : id);
  };

  const handleSubmitUpdate = () => {
    setUpdateProductId(null);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product_form product">
          {updateProductId === product.id ? (
            <UpdateProduct
              product={product}
              onFinishEdit={handleSubmitUpdate}
            />
          ) : (
            <div className="product">
              <h2>{product.name}</h2>
              <p>Описание: {product.description}</p>
              <p>Цена: {product.price} руб.</p>
              <p>Наличие: {product.available ? "есть" : "отсутствует"}</p>
              <div className="buttons">
                <button onClick={() => handleDelete(product.id)}>
                  Удалить
                </button>
                <button onClick={() => handleUpdate(product.id)}>
                  Изменить
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
