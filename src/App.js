import React from 'react';
import {message} from 'antd';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import NotFound from './pages/notFound/404'

export default class App extends React.Component{

    handleClick = () => {
        message.success("成功啦。。。")
    }

    render() {
        /*return <Button type="primary" onClick={this.handleClick}>Button1</Button>*/
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='*' component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

