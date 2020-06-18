/**
 * 登陆的路由组件
 */
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './home.less'
import {Button} from 'antd'

export default class Home extends Component {
    
    handleJump = () => {
        this.props.history.push('/login');
    }
    render() {
        return (
            <div class="container">
                <h1>欢迎来到德莱联盟</h1>
                <Link to="/login">点击跳转login页面</Link>
                <br/>
                <Link to="/admin">点击跳转admin页面</Link>
                <br/>
                <Button onClick={this.handleJump}>跳转登陆</Button>
            </div>
            
        )
    }
}