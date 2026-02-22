import {useState} from "react";
import "../CSSFiles/Registration.css";

function BulkRegistration(){

 const [file,setFile]=useState(null);

 const handleFileChange=(e)=>{
  setFile(e.target.files[0]);
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(file);
 }

 return(
  <div className="reg-container">

    <h2 className="reg-heading">Bulk User Registration</h2>

    <form className="reg-form" onSubmit={handleSubmit}>

      <input 
        type="file" 
        accept=".xlsx,.csv"
        onChange={handleFileChange}
      />

      <button>Upload File</button>

    </form>

    <p className="default-pass">
      Default Password : <b>Tcs#1234</b>
    </p>

  </div>
 );
}

export default BulkRegistration;