/**
 * Created by HHH on 2018/3/16.
 */
import React from 'react';

export class Square extends React.Component {

    constructor(props){
        super();
        this.state = {
            value:props.value
        }
    }

    change() {
        this.setState({value: 'X'});

    }
    render(){
        return (
            <button className="square" onClick={()=>{this.change();}}>
                {this.state.value}
            </button>
        );
    }
}

export class Board extends React.Component {
    constructor(props){
        super();
    }
    render() {
        return <Square value={this.props.i}/>;
    }
}

export class Game extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <div className="board-row">
                    <Board i={1}></Board>
                    <Board i={2}></Board>
                    <Board i={3}></Board>
                </div>
                <div className="board-row">
                    <Board i={4}></Board>
                    <Board i={5}></Board>
                    <Board i={6}></Board>
                </div>
                <div className="board-row">
                    <Board i={7}></Board>
                    <Board i={8}></Board>
                    <Board i={9}></Board>
                </div>
            </div>
        );
    }
}
