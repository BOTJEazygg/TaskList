import React, { Component } from 'react';

class Day extends Component {
    constructor(props){
        super(props)

    }
    action=()=>{
        
    }
    render() {
        return (
            <div className='Day' onClick={()=>this.action()}>
                {this.props.num+1}
            </div>
        );
    }
}

export default Day;