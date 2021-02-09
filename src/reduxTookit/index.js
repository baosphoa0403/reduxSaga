import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../reducers/userReducer";
import Modal from "./modal";
export default function ReduxTest() {
  const data = useSelector((state) => state.todoUser.data);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div>
      <h1>Booking</h1>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#modelId"
      >
        modal
      </button>
       <Modal/>
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                  >
                    Thêm
                  </button>
                  <button type="button" class="btn btn-primary"
                   onClick={() => {
                    dispatch(remove(item));
                  }}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
