import React from "react";

class LifeCycle extends React.Component{
    constructor(props){
        console.log('constructor');
        super(props);
        this.state = {
            counter : 0
        }
        this.increment = () => this.setState({counter: this.state.counter+1})
        this.decrement = () => this.setState({counter: this.state.counter-1})
    }
    //only called when component show on screen/ render on dom
    componentDidMount(){
        console.log('component did mount');
        console.log('-----');
    }
    render(){
        console.log('render');
        return(
            <div>
                <button onClick={this.increment}> Increment </button>
                <button onClick={this.decrement}> Decrement </button>
                <div className="counter">
                    counter: {this.state.counter}
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        console.log('component update');
    }
    componentWillUnmount(){
        console.log('componenet unmount');
    }
}
export default LifeCycle;
