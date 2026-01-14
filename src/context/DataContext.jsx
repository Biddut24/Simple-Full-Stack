import React, { createContext, useState } from 'react';


export const DataContextManagement = createContext();

 const DataContext = ({children}) => {
    const [users,setUsers]= useState([]);

    const dataLoad=()=>{
       return fetch('https://simple-server-peach.vercel.app/users')
        .then(res=>res.json())
        .then((data)=>setUsers(data));
       
    }; 
     dataLoad()
     
    const dataInfo = {
        users
       
    }


    return <DataContextManagement.Provider value={dataInfo}>
        {children}
    </DataContextManagement.Provider>;
};

export default DataContext;