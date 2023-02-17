import React, { useEffect, useState } from "react";
import { Read, Delete } from "../../APIservices/CRUDServices";
import { FullScreenLoader } from "../Common/FullScreenLoader";
import { SuccessAlert, ErrorAlert } from "../../../src/helper/ValidationHelper";
import { useNavigate } from "react-router-dom";
import {Container,Row} from "react-bootstrap";
const ListTable = () => {
  const navigate = useNavigate();
  let [DataList, setDataList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    Read().then((Result) => {
      setDataList(Result);
    });
  }
  const DeleteItem = (id) => {
    Delete(id).then((result) => {
      if (result === true) {
        SuccessAlert("Delete Success");
        getProducts();
      } else {
        ErrorAlert("Action Failed");
      }
    });
  };

  const UpdateItem = (id) => {
    navigate("/update/" + id);
  };
  if (DataList.length > 0) {
    return (
      <Container fluid>
        <Row>
       <div className="list_head">
       <h1> Available Products </h1>
       </div>
         
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Image</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {DataList.map((item, i) => {
              return (
                <tr>
                  <td>{item.ProductName}</td>
                  <td>{item.ProductCode}</td>
                  <td>
                    <img
                      className="list-img"
                      src={item.Img}
                      alt=""
                    />
                  </td>
                  <td>{item.UnitPrice}</td>
                  <td>{item.Qty}</td>
                  <td>{item.TotalPrice}</td>
                  <td>
                    <button
                      onClick={DeleteItem.bind(this, item._id)}
                      className="btn btn-danger mx-1"
                    >
                      {" "}
                      Delete
                    </button>

                    <button
                      onClick={UpdateItem.bind(this, item._id)}
                      className="btn btn-primary mx-1"
                    >
                      {" "}
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </Row>
      </Container>
    );
  } else {
    <div>
      <FullScreenLoader />
    </div>;
  }
};

export default ListTable;
