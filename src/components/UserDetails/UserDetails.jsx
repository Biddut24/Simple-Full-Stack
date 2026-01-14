import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const data = useLoaderData();


  const handleEditUser = () => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const details = form.details.value;

    const editUser = {
      name,
      email,
      details,
    };
    // console.log(editUser);
    fetch(`https://simple-server-peach.vercel.app/users/${data._id}`, {
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(editUser),
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount >0){
        alert("User updated successfully done!!!!!")
      }
      
    })
    
  };


  return (
    <div>
      <h1> User details:{data?.name}</h1>
      <h1>ID:{data?._id}</h1>
      <h1>Email:{data?.email}</h1>
      <h1>Details:{data?.details}</h1>

      <div className="card-body flex-row justify-center">
        <form onSubmit={handleEditUser} className="fieldset shadow-lg w-90 p-4">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={data?.name}
            className="input"
            placeholder=" User Name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={data?.email}
            className="input"
            placeholder=" User Email"
          />
          <label className="label">Details</label>
          <textarea
            type="text"
            name="details"
            defaultValue={data?.details}
            className="input h-30"
            placeholder="Add some text about user"
          />

          <input
            value="Edit User"
            type="submit"
            className="btn btn-neutral mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default UserDetails;




