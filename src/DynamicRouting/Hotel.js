import React from "react";
// import { Outlet } from 'react-router-dom'
import {Link} from "react-router-dom";
import {  Button } from "react-bootstrap";

function Hotel(){
    //const rooms = ['room1', 'room2', 'room3'];
    const rentals = [{
        _id: 1,
        title: "Nice Shahghouse Biryani",
        image: "https://www.lux-review.com/wp-content/uploads/2019/09/turkish-hotel-1024x576.jpg",
      },
      {
        _id: 2,
        title: "Modern apartment in center",
        image: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
      },
      {
        _id: 3,
        title: "Old house in nature",
        image: "https://www.samaa.tv/wp-content/uploads/2016/12/besthotelsites-1.jpg",
      }]
    return(
        <div className="card-list">
                <div className="container">
                    <h1 className="page-title">Your Home All Around the World</h1>
                    <div className="row">
                        {
                            rentals.map((rental)=>{
                                return(
                                    <div key={rental._id} className="col-md-3">
                                        <div className="card bwm-card">
                                        <img 
                                        className="card-img-top" 
                                        src={rental.image}
                                        alt={rental.title} />
                                        <div className="card-body">
                                        <h5 className="card-title big-font">
                                            {rental.title}
                                        </h5>
                                        <p className="card-text">
                                            <Button variant=""><Link to={"/room/" + rental._id }>Check Rooms</Link></Button>
                                        </p>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        // <div>
        //     {rooms.map((room, index ) => (
        //         <h1 key = {index} >
        //             <Link to={`/room/${index}`}>{room}</Link>
        //         </h1>
        //     ))}
            
        // </div>
    );
}
export default Hotel;