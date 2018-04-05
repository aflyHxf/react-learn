import React from 'react'
import {Link} from 'react-router-dom'

//组件引入
import PageTitle from 'component/page-title/page-title.jsx'

//方法的引入
import MUtil from 'util/mm.jsx'
import Statistic from 'service/statistic-service.jsx'

const _mm = new MUtil();
const _statistic = new Statistic();

//样式引入
import './index.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userCount: '1123',
            productCount: '34543',
            orderCount: '12315',
        }
    }

    componentDidMount() {
        this.loadCount()
    }

    loadCount() {
        _statistic.getHomeCount().then(res => {
            this.setState(res)
        }, errMsg => {
            _mm.errorTips(errMsg)
        })
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"></PageTitle>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/product" className="color-box green">
                            <p className="count">{this.state.productCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>商品总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/order" className="color-box blue">
                            <p className="count">{this.state.orderCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>订单总数</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home