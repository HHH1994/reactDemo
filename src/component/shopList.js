/**
 * Created by HHH on 2018/3/16.
 */
import React from 'react';
import axios from '../axios'
export class Shop extends React.Component {
    constructor(){
        super();
        this.state = {a:'a',list:[]}
    }

    b=()=>{
        axios.get('/sys/user/list?pageNo=1&pageSize=15&id=1').then(res=>{
            console.log(res);
            this.setState({
                list:[]
            });
        });
    };

    componentDidMount(){
        axios.get('/sys/user/list?pageNo=1&pageSize=15&id=1').then(res=>{
            console.log(res);
            this.setState({
                list:res.data.data
            });
        });
    }

    render() {
        let listItem = this.state.list.map(item=>{return <li key={item.id}>{item.name}</li>;});
        console.log(listItem);
        return (
            <div className="shopping-list">
                <p>{new Date().toLocaleDateString()}</p>
                <ul>
                    {listItem}
                </ul>
                <button onClick={this.b}>按钮</button>
            </div>
        );
    }
}