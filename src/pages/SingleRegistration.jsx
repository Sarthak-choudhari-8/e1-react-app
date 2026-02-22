import {useState} from "react";
import "../CSSFiles/Registration.css";

function SingleRegistration(){

 const [user,setUser]=useState({
  name:"",
  email:"",
  employeeId:"",
  role:"Trainee",
  batch:""
 });

 const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(user);
 }

 return(
  <div className="reg-container">

    <h2 className="reg-heading">Single User Registration</h2>

    <form className="reg-form" onSubmit={handleSubmit}>

      <input name="name" placeholder="Full Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="employeeId" placeholder="Employee ID" onChange={handleChange}/>
      <input name="batch" placeholder="Batch No" onChange={handleChange}/>

      <select name="role" onChange={handleChange}>
        <option value="Trainee">Trainee</option>
        <option value="Admin">Admin</option>
      </select>

      <button>Create User</button>

    </form>

    <p className="default-pass">
      Default Password : <b>Tcs#1234</b>
    </p>

  </div>
 );
}

export default SingleRegistration;