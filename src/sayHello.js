import react from "react";


function Hello(props){
    const sayHello = () => {
        console.log("hello");
    };
    return (
        //pros: properties assigned to elements
        <div>
            <h3>{props.name}</h3>
            <button onClick={sayHello}> Say Hello </button>
        </div>

    );
}
export default Hello;

