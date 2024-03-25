import React, { Component ) from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.count2 = 0
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
        this.count2 = this.count2 + 1;
        console.log("handle click method state class" + this.state.count)
        console.log("handle click method class" + this.count2  
        )
    }
    render() {
        return (
            <div>
            <h1> Hello, World </h1>
            <p> this is simple class Component</p>
            <button onClick={this.handleClick}>increment</button>
            </div>
        )
    }
}

export default ClassComponent