import React, { Component } from 'react'
import Item from 'antd/lib/list/Item'

export default class ListItem extends Component {
    state = {
        val:'',
        list:[]
    }

    handleChange = (event) =>{
        this.setState({
            val:event.target.value
        })
    }

    handleAdd =() =>{
        const {val,list} = this.state;
        list.push(val);
        this.setState({
            list
        })
    }
    render() {
        const val = this.state.val;
        const arr = this.state.list;
        const listItem = [];
        arr.map((item)=>{
             let li = <li>{item}</li>;
             listItem.push(li);
        })
        return (
            <div>
                <div>
                    <input type="text" value={val} onChange={this.handleChange}/>
                    <button onClick={this.handleAdd}>add</button>
                </div>
                <ul>
                    {listItem}
                </ul>
            </div>
        )
    }
}

