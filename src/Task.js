import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
        super(props)
        this.state={
            checked:false,
            display:true,
            text:"",
            color:null
        }
    }
    change=(e)=>{
        this.setState({
            checked:e.target.checked
            })
    }
    textinput=(v)=>{
        console.log(v)
        console.log("input")
        if(v!=""){
        this.setState({
            display:false,
            text:v
        })}
    }
    divclick=()=>{
        this.setState({
            display:true
        })
        console.log(this.state.display)
    }
    view=(v)=>{
this.setState({
    color:v
})
    }
    render() {
        return (
            <div className="item" style={{backgroundColor:this.state.color}}>
            {/* {this.props.k} */}
                <input type='checkbox' onChange={(event)=>this.change(event)}></input>
                <div className="text" onClick={()=>this.divclick()} style={{display:"inline"},this.state.checked? {textDecoration: "line-through"}:{textDecoration: "none"}}>{this.state.display&&this.state.text!=""?null:this.state.text}</div>
                <input className="text"  onBlur={(event)=>this.textinput(event.target.value)} type="text" id="name" required="required" style={this.state.checked? {textDecoration: "line-through"}:{textDecoration: "none"},this.state.display?{display:"inline"}:{display:"none"}}></input>
                <input className="colorchanger" type='color' onBlur={(event)=>this.view(event.target.value)}/>
                <button className='delete' onClick={()=>this.props.del(this.props.k)}><span class="tex">Delete</span></button>        
                        
            </div>
        );
    }
}

export default Task;