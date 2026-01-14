import React from "react";
import { Link } from "react-router-dom";
const User = ({user}) => {
  const handleDeleteUser = (clickId) => {
    fetch(`https://simple-server-peach.vercel.app/users/${clickId}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount >0){
        alert("User deleted successfully done!!!!!😊😊😊😊")
      }
      
    })
    
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90TUJICExsjvvKPziWtzJBNbcN5x4SzAogg&s"
          alt="user"
        />
      </figure>
      <div className="card-body">
         <p>
        ID: {user._id}
        </p>
        <h2 className="card-title">  Name: {user.name}</h2>
        <p>
        Email: {user.email}
        </p>
        <div className="card-actions justify-between">
        <Link to ={`/user-details/${user._id}`}><button className="btn btn-primary">Show Details</button></Link>

        <button onClick={()=>handleDeleteUser(user._id)} className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default User;


 