import React from "react";
import  {useParams} from "react-router-dom";
function Room(){
    return(
        <div>
            <h1>this is Room page {useParams().id}</h1>
        </div>
    );
}
export default Room;