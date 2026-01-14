import React, { useContext } from "react";
import User from "./User";
import Loading from "../Shared/Loading/Loading";
import DataContext, { DataContextManagement } from "../../context/DataContext";

const Users = () => {
  const { users } = useContext(DataContextManagement);

  if (users?.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Hello Users {users?.length}</h1>

      <div className=" m-5 grid grid-cols-3 gap-5">
        {users?.map((user) => (
          <User key={user._id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
