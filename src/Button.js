import React, { Component } from 'react';

class Button extends Component {
    add=()=>{
        this.props.f()
    }
    render() {
        return (
            <button onClick={()=>this.add()}><span class="tex">ADD</span></button>
        );
    }
}

export default Button;