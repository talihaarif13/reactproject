import React from "react";
import { useSelector } from "react-redux";
import store from "./Redux/store";

function Profile(){
    //use selector hook to get state data
    const users = useSelector(state => state.users)
    //get state to get state
    const store_data = store.getState();
    console.log(store_data.users);
    return(
        <div>
            <h2> hello </h2>
            {users.map(data => (
                <li key={data.id}>
                    {data.email}
                    <h1>{data.name}</h1>
                </li>
            ))}
        </div>
    )
}

export default Profile;