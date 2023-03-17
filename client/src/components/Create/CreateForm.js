import React, { useRef } from "react";
import {
  ErrorAlert,
  isEmpty,
  SuccessAlert,
} from "../../helper/ValidationHelper";
import { Create } from "../../APIservices/CRUDServices";
import { FullScreenLoader } from "../Common/FullScreenLoader";
import { useNavigate } from "react-router-dom";
const CreateForm = () => {
  const navigate = useNavigate();
  let ProductName,
    ProductCode,
    Img,
    UnitPrice,
    Qty,
    TotalPrice,
    Loader = useRef();

  const saveData = () => {
    let Product_Name = ProductName.value;
    let Product_Code = ProductCode.value;
    let Prodcut_Img = Img.value;
    let Unit_Price = UnitPrice.value;
    let Product_Quantity = Qty.value;
    let Total_Price = TotalPrice.value;

    if (isEmpty(Product_Name)) {
      ErrorAlert("Product Name Required");
    } else if (isEmpty(Product_Code)) {
      ErrorAlert("Product Code Required");
    } else if (isEmpty(Prodcut_Img)) {
      ErrorAlert("Product Img Required");
    } else if (isEmpty(Unit_Price)) {
      ErrorAlert("Product Price Required");
    } else if (isEmpty(Product_Quantity)) {
      ErrorAlert("Product Quantity Required");
    } else if (isEmpty(Total_Price)) {
      ErrorAlert("Product Total Price Required");
    } else {
      Loader.classList.remove("d-none");
      // data create

      Create(
        Product_Name,
        Product_Code,
        Prodcut_Img,
        Unit_Price,
        Product_Quantity,
        Total_Price
      ).then((Result) => {
        Loader.classList.add("d-none");
        if (Result === true) {
          SuccessAlert("Data Save Success");
          navigate("/");
        } else {
          ErrorAlert("Request Failed");
        }
      });
    }
  };
  return (
   <>
        <div className="create_head">
          <h1> Create your Product </h1>
        </div>
      <div className="container create_container">
        <div className="row">
          <div className="col-md-6">
            <label> Product Name </label>
            <input
              ref={(input) => (ProductName = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label> Product Code </label>
            <input
              ref={(input) => (ProductCode = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label> Product Image </label>
            <input
              ref={(input) => (Img = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label> Product Unit Price </label>
            <input
              ref={(input) => (UnitPrice = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label> Product Quantity </label>
            <input
              ref={(input) => (Qty = input)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label> Product Pirce </label>
            <input
              ref={(input) => (TotalPrice = input)}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 p-2">
            <button onClick={saveData} className="btn btn-primary w-100">
              {" "}
              Save{" "}
            </button>
          </div>
        </div>
      </div>
   
      <div className="d-none" ref={(div) => (Loader = div)}>
        <FullScreenLoader />
      </div>
      </>
      
  );
};

export default CreateForm;
