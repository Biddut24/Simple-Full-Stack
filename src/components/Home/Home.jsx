import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { DataContextManagement } from "../../context/DataContext";

const Home = () => {
  const { users } = useContext(DataContextManagement);

  if (users?.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Home {users.length}</h1>

      {
        <div className=" m-5 grid grid-cols-3 gap-5">
          {users.map((user) => (
            <div key={user._id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90TUJICExsjvvKPziWtzJBNbcN5x4SzAogg&s"
                  alt="user"
                />
              </figure>
              <div className="card-body">
                <p>ID: {user._id}</p>
                <h2 className="card-title"> Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <div className="card-actions justify-between">
                  <Link to={`/user-details/${user._id}`}>
                    <button className="btn btn-primary">Show Details</button>
                  </Link>

                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Home;
