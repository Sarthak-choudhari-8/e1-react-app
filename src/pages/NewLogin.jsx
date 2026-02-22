import {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import "../CSSFiles/login.css";

function NewLogin(){

 const nav = useNavigate();

 const [user,setUser]=useState({
  username:"",
  password:"",
  role:"Trainee"
});

 const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
 }

 const handleSubmit=async(e)=>{
  e.preventDefault();

 //aPI calls 

  if(user.role==="Admin"){
    nav("/admin");
  }
  else{
    nav("/trainee");
  }
 }

 return(
 <div className="login-container">
  <div className="login-box">
   <h2>Login</h2>

   <form onSubmit={handleSubmit}>

 <input 
  name="username" 
  placeholder="Username" 
  onChange={handleChange}
 />

 <input 
  name="password" 
  type="password" 
  placeholder="Password" 
  onChange={handleChange}
 />

 
 <select 
  name="role" 
  value={user.role}
  onChange={handleChange}
 >
   <option value="Trainee">Trainee</option>
   <option value="Admin">Admin</option>
 </select>

 <button>Login</button>

</form>

  </div>
 </div>
);
 
}

export default NewLogin;