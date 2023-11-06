import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Delete({ data, setData }) {
  const { index } = useParams();

  if (isNaN(index) || index < 0 || index >= data.length) {
    return (
      <div>
        <h1>Delete Data</h1>
        <p>Invalid item index. Please go back to the home page.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const rowNumber = parseInt(index, 10) + 1;

  const handleDelete = () => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div>
      <div
        className="modal show"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Delete Row {rowNumber}
              </h5>
            </div>
            <div className="modal-footer">
              
              <Link to="/" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </Link>
              <Link to="/" className="btn btn-danger" onClick={handleDelete}>
                Confirm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
