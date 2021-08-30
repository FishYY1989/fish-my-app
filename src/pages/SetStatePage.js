import React, { Component } from 'react'

export default class SetStatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    componentDidMount(){
        // this.changeValue(1)
        document.getElementById('test').addEventListener('click', this.setCounter)
    }
    changeValue = (v) => {
        //setState在合成事件和生命周期中是异步的，这里的异步是批量更新，达到了优化性能的目的
        this.setState({
            counter: this.state.counter + v
        },
        ()=>{
            //callback就是在state更新完成后再执行
            console.log('counter', this.state.counter);
        });
        
    }

    setCounter = () => {
        //setState在setTimeout和原生事件中是同步的
        setTimeout(() => {
            this.changeValue(1)
        }, 0);
        // this.changeValue(1)
    }

    render() {
        return (
            <div>
                <h3>SetStatePage</h3>
                <button onClick={this.setCounter}>{this.state.counter}</button>
                <button id="test">原生事件*{this.state.counter}</button>
            </div>
        )
    }
}
