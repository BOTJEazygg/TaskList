import React, { Component } from 'react';
import Button from './Button'
import Task from './Task'
import Day from './Day'
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            tasks:[],
            numbers:[0],
            days:[],
        }
    }
    add=()=>{
        const t=this.state.numbers
        var i
        if(t.length>0){
            i=parseInt(t[t.length-1])+1
        }
        
       
        this.setState({
            tasks:this.state.tasks.concat(<Task key={t[i-1]} k={t[i-1]} del={this.del}/>),
            numbers:this.state.numbers.concat(i)
        })
    }
    
        
        
    
    del=(num)=>{
        
       this.setState({
           tasks:this.state.tasks.filter(item=> item.key != num.toString())
       }
       ,()=>{
        // this.state.tasks.forEach(element => {
        
        // if(element.key>num){
this.state.numbers[0]+=1     
//  }

        //  });  
         console.log(this.state.numbers)
        }
        )
       
       
    }
    render() {
        const tab=[]
        for (let index = 0; index < 31; index++) {
            tab.push(<Day key={index} num={index}/>)
           }
        
        return (
            <div id='main' >
            
            <div id="List">
                <Button f={this.add}/>
                {this.state.tasks}
            </div>
            <div id="calendery">{tab}</div>
            
            </div>
        );
    }
}

export default App;