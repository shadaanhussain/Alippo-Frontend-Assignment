import React from 'react';
import { Link } from 'react-router-dom';

function Home({ data, setData }) {
  return (
    <div className="container mt-5 d-flex justify-content-center" style={{width:'100vw'}}>
      <div className="text-center">
        <h1>Data Table</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Serial No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Pin Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name || 'N/A'}</td>
                  <td>{item.age || 'N/A'}</td>
                  <td>{item.city || 'N/A'}</td>
                  <td>{item.pinCode || 'N/A'}</td>
                  <td>
                    <Link to={`/edit/${index}`} className="btn btn-primary me-2">Edit</Link>
                    <Link to={`/delete/${index}`} className="btn btn-danger">Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;

