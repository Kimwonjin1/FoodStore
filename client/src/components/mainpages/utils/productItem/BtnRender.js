import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";

function BtnRender({ product, deleteProduct }) {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;

  return (
    <div className="row_btn">
      {isAdmin ? (
        <>
          <Link id="btn_buy" to="#!" onClick={() => deleteProduct(product._id, product.images.public_id)}>
            삭제
          </Link>
          <Link id="btn_view" to={`/edit_product/${product._id}`}>
            수정
          </Link>
        </>
      ) : (
        <>
          <Link id="btn_cart" to="#!" onClick={() => addCart(product)}>
            <img src={require("../../../headers/icon/cart2.svg")} alt="" />
          </Link>
          <Link id="btn_bogi" to={`/detail/${product._id}`}></Link>
        </>
      )}
    </div>
  );
}

export default BtnRender;
