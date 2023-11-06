import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Edit({ data, setData }) {
  const { index } = useParams();
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    if (index >= 0 && index < data.length) {
      setEditedName(data[index].name || '');
    }
  }, [index, data]);

  const handleSaveEdit = () => {
    if (index >= 0 && index < data.length) {
      const newData = [...data];
      newData[index] = { ...data[index], name: editedName };
      setData(newData);
    }
  };

  const item = data[index];

  return (
    <div>
      <div
        className="modal show"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
        style={{ display:'block' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Edit: {item ? item.name : 'N/A'}
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="editedName" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editedName"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Link to="/" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </Link>
              <Link to="/" className="btn btn-primary" onClick={handleSaveEdit}>
                Save
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
