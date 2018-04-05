import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

export default class Statistic {
    getHomeCount() {
        return _mm.requset({
            url: '/manage/statistic/base_count.do'
        })
    }
}

