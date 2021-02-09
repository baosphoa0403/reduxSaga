import React from "react";

export default function Table(props) {
    let {arrGioHang, xoa} = props;
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng ({arrGioHang.length})
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Table modal</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                  <table class="table">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Img</th>
                              <th>Price</th>
                              <th>Xoá</th>
                          </tr>
                      </thead>
                      <tbody>
                          {arrGioHang.map((item)=>{
                              return <tr>
                                  <td>{item.name}</td>
                                  <td><img width="100px" src={item.img}/></td>
                                  <td>{item.price}</td>
                                  <td><button type="button" class="btn btn-primary" onClick={()=>{
                                   xoa(item)
                                  }}>Xoá</button></td>
                              </tr>
                          })}
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
