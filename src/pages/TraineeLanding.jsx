import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import "../CSSFiles/trainee.css";

function TraineeLanding(){

 const nav = useNavigate();
 const [profile,setProfile]=useState({});



 const handleLogout=async()=>{

   nav("/");
 }
 return(
  <div className="dashboard-container">

    <h1 className="dashboard-heading">Trainee Dashboard</h1>

    <div className="dashboard-bar">

      {/* LEFT SIDE */}
      <div className="left-profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          className="profile-logo"
        />
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-cards">

        <div className="info-card"><b>Name :</b> Sarthak</div>
        <div className="info-card"><b>Employee ID :</b> 2939444</div>
        <div className="info-card"><b>Email :</b> sarthak@gmail.com</div>
        <div className="info-card"><b>Role :</b> Trainee</div>
        <div className="info-card"><b>Batch No :</b> E1</div>
        <div className="info-card"><b>Department :</b> IT</div>

      </div>

    </div>

  </div>
 )
}

export default TraineeLanding;