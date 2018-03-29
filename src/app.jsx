import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick() {
        this.props.changeChild2Color('#f00')
    }
    render() {
        return (
            <div>
                <h1>Child1： {this.props.bgColor}</h1>
                <button onClick={(e) => {
                    this.handleClick(e)
                }}>改变Child2的背景颜色
                </button>
            </div>
        )
    }
}

class Child2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{background: this.props.bgColor}}>
                <h1>Child2背景色： {this.props.bgColor}</h1>
            </div>
        )
    }
}
class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Child2BgColor: '#999'
        }
    }
    onChangeChild2BgColor(color) {
        this.setState({
            Child2BgColor: color
        })
    }
    render(props) {
        return (
            <div>
                <Child1 changeChild2Color={(color) => {
                    this.onChangeChild2BgColor(color)
                }}/>
                <Child2 bgColor={this.state.Child2BgColor}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Father/>,
    document.getElementById('app')
)