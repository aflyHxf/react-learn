import React from 'react'

import MUtil from 'util/mm.jsx'
import User from 'service/user-service.jsx'

const _mm = new MUtil();
const _user = new User();
import './login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getParam('redirect') || ''
        }
    }

    componentWillMonut() {
        document, title = '登录 - HAPPY MMALL'
    }

    onInputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        });
    }

    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit()
        }
    }

    //提交表单
    onSubmit() {
        let userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        let checkResult = _user.checkLoginInfo(userInfo);
        if (checkResult.status) {
            _user.login(userInfo).then(res => {
                _mm.setStorage('userInfo', res)
                this.props.history.replace(this.state.redirect);
            }, (errMsg) => {
                _mm.errorTips(errMsg)
            })
        } else {
            _mm.errorTips(checkResult.msg)
        }
    }


    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 -MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                       name="username"
                                       onKeyUp={(e) => {
                                           this.onInputKeyUp(e)
                                       }}
                                       className="form-control"
                                       placeholder="请输入用户名"
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password"
                                       name="password"
                                       onKeyUp={(e) => {
                                           this.onInputKeyUp(e)
                                       }}
                                       className="form-control"
                                       placeholder="请输入密码"
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <button className="btn btn-lg btn-block btn-primary"
                                    onClick={() => {
                                        this.onSubmit()
                                    }}
                            >登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login