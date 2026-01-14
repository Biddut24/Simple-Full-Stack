import React from "react";

const AddUser = () => {
  const handleAddUser = () => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const details = form.details.value;

    const user = {
      name,
      email,
      details,
    };
    // console.log(user);
    fetch("https://simple-server-peach.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) =>{
        if(data.acknowledged){
          alert("User Added Succesfully Done!!!!")
          form.reset()
        }
      });
  };
  
  return (
    <div className="flex justify-center items-center mt-20 mb-15">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddUser} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder=" User Name"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder=" User Email"
            />
            <label className="label">Details</label>
            <textarea
              type="text"
              name="details"
              className="input h-30"
              placeholder=" Add some text about user"
            />

            <input
              value="Add User"
              type="submit"
              className="btn btn-neutral mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
