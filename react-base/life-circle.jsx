import React from 'react';
import ReactDOM from 'react-dom';


//生命周期顺序
// constructor -> componentWillMount ->render ->componentDidMount

class Component extends React.Component {
    //构造函数
    //初始化数据
    constructor(props) {
        super(props)
        this.state = {
            data: 'Old State'
        }
        console.log("constructor")
    }

    //组件将要加载
    componentWillMount() {
        //触发异步
        console.log('componentWillMount')
    }

    //  组件加载完成
    componentDidMount() {
        console.log('componentDidMount')
    }

    //将要接受父组件传来的props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    //组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }


    //是否应该更新子组件
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    //组件更新完成
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    //组件即将销毁
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    //点击事件
    handleClick() {
        //这里是更新数据
        console.log('更新数据')
        this.setState({
            data: 'New State'
        })
    }

    //渲染
    render() {
        console.log('render')
        return (
            <div>
                <div>Props:{this.props.data}</div>
                <button onClick={() => {
                    this.handleClick()
                }}>更新组件
                </button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'Old State',
            hasChild: true
        }
    }

    propsChange() {
        this.setState({
            data: 'New State'
        })
    }

    destoryChild() {
        this.setState({
            hasChild: false
        })
    }

    render() {
        return (
            <div>
                {this.state.hasChild ? <Component data={this.state.data}/> : null}
                <button onClick={() => {
                    this.propsChange()
                }}>改变props
                </button>
                <button onClick={() => {
                    this.destoryChild()
                }}>删除子组件
                </button>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)