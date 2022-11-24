import React, { Component } from 'react'


export default class App3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
    }

    render() {
        return (

            <div>
                <h2>数字:{this.state.num}</h2>
                {/* 事件写法1 */}
                <button onClick={() =>
                    this.setState({ num: this.state.num + 1 })}>按钮1--累加</button>
                {/* 事件写法1 */}
                <button onClick={this.addNum.bind(this)}>按钮2--累加</button>
                {/* 事件写法3 */}
                <button onClick={() => this.addNum()}>按钮3--累加</button>
            </div>
        )
    }

    addNum() {
        this.setState(
            { num: this.state.num + 1 }
        )
    }
}
