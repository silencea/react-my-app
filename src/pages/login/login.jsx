/**
 * 登陆的路由组件
 */
import React from 'react'
export default class Login extends React.Component {
    
    constructor(props){
        console.log("constructor");
        super(props);
        this.state = {
            name:"didi",
            age:30
        }
        //this.updateInfo = this.updateInfo.bind(this);
    }

    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    //绑定this，不然需要在构造函数中this.updateInfo = this.updateInfo.bind(this);
    updateInfo = () =>{
        this.setState({
            name:"tim",
            age:20
        })
    }

    render () {
        return (
        <div>
            <h1>Hello,{this.state.name}</h1>
            <p>年龄：{this.state.age}</p>
        
            <button onClick={this.updateInfo}>更新数据</button>
        </div>
        )
    }
    
}