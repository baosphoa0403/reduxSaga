import React from "react";

export default function Modal() {
  return (
    <div>
      <div>
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
                <h5 className="modal-title">Add user</h5>
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
                <div className="form-group">
                  <label htmlFor />
                  <input
                    type="text"
                    className="form-control"
                    name
                    id
                    aria-describedby="helpId"
                    placeholder="id"
                  />
                   <input
                    type="text"
                    className="form-control"
                    name
                    id
                    aria-describedby="helpId"
                    placeholder="name"
                  />
                   <input
                    type="text"
                    className="form-control"
                    name
                    id
                    aria-describedby="helpId"
                    placeholder="age"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
