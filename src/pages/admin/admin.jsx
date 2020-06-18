/**
 * 登陆的路由组件
 */
import React, {Component} from 'react'
import {Button, message} from 'antd';

export default class Admin extends Component {
    handleClick = () => {
        message.success("成功啦。。。")
    }

    render() {
        return (
            <Button type="primary" onClick={this.handleClick}>Button1</Button>
        )
    }
}