import React from 'react';
import { Component } from 'react';

class Classcompostate extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name : "sumit"
        }
    }

    Incremet = () => {
        this.setState({count : this.state.count + 1})
        this.setState({name : this.state.count  = "radhe"})
        // console.log("Incremet");

    }
    Decrement = () => {
        // console.log("Decrement");
        this.setState({count : this.state.count - 1})
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.Incremet}>Incremet</button>
                <button onClick={this.Decrement}>Decrement</button>
            </>
        );
    }
}

export default Classcompostate;