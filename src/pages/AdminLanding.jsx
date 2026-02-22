import "../CSSFiles/admin.css";
import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";

function AdminLanding(){

let nav = useNavigate();
 const handleLogout=async()=>{
// api calls
   nav("/");
 }

  return(
    <div className="admin-container">

      <h2 className="admin-heading">Admin User Management</h2>

      {/* INFO CARDS */}
      {/* <div className="info-cards">

        <div className="info-card">
          <h3>Total Trainees</h3>
          <p>120</p>
        </div>

        <div className="info-card">
          <h3>Active Trainees</h3>
          <p>95</p>
        </div>

        <div className="info-card">
          <h3>Inactive Trainees</h3>
          <p>25</p>
        </div>

        <div className="info-card">
          <h3>Total Batches</h3>
          <p>8</p>
        </div>

      </div> */}

      {/* SEARCH + REGISTRATION */}
      <div className="admin-action-bar">

        <input 
          type="text"
          placeholder="Search by Name / Emp ID / Batch"
          className="search-input"
        />

        {/* DIVIDER */}
        <div className="divider"></div>

        <div className="registration-buttons">
          <button className="reg-btn" onClick={()=>nav("/single-register")}>Single Registration</button>
          <button className="reg-btn" onClick={()=>nav("/bulk-register")}>Bulk Upload</button>
        </div>

         <button className="logout-btn" onClick={handleLogout}>Logout</button>

      </div>

      {/* USER TABLE */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Emp ID</th>
            <th>Email</th>
            <th>Batch</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sarthak</td>
            <td>2939444</td>
            <td>sarthak@gmail.com</td>
            <td>E1</td>
            <td>Trainee</td>
            <td>
              <div className="action-buttons">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
                <button className="deactivate-btn">Deactivate</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default AdminLanding;