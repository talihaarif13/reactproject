import React from "react";
import store from "./Redux/store";

function Profile(){
    const store_data = store.getState();
    console.log(store_data);
    return(
        <div>
            <h2> hello </h2>
            {store_data.map(data => (
                <li key={Math.random()}>
                    {data.email}
                    <h1>{data.name}</h1>
                </li>
            ))}
        </div>
    )
}

export default Profile;