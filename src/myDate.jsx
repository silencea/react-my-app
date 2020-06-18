import React, { Component } from 'react'

export default class MyDate extends Component {
    constructor(props){
        super(props);
        var date = new Date().toLocaleTimeString();

        this.state = {
            date: date
        }; 

        this.update();
    }

    update =()=>{
        setInterval(() => {
            let time = new Date().toLocaleTimeString();
            this.setState({
                date : time
            });
        },1000);
    }

    render() {
        console.log(this.state.date);
        return (
        
            <div>
                <h1>现在时间是：</h1>
                <h2>{this.state.date}</h2>
            </div>
        )
    }
}
