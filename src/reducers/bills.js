import Immutable from 'immutable';
import * as types from '../const/const';
let initialState = Immutable.fromJS({
    channels: [
        {
            name: 'ALI',
            imgPath: 'http://beeclouddoc.qiniudn.com/ali.png'
        },
        {
            name: 'WX',
            imgPath: 'http://beeclouddoc.qiniudn.com/wechat.png'
        },
        {
            name: 'UN',
            imgPath: 'http://beeclouddoc.qiniudn.com/unionpay.png'
        },
        {
            name: 'JD',
            imgPath: 'http://beeclouddoc.qiniudn.com/jd.png'
        },
        {
            name: 'BD',
            imgPath: 'http://beeclouddoc.qiniudn.com/bd.png'
        },
        {
            name: 'YEE',
            imgPath: 'http://beeclouddoc.qiniudn.com/yb.png'
        },
        {
            name: 'PAYPAL',
            imgPath: 'http://beeclouddoc.qiniudn.com/paypal.png'
        },
        {
            name:'BC',
            imgPath:'http://7xo7mg.com1.z0.glb.clouddn.com/bc.png'
        }
    ],
    btnText: {
        bills: '订单查询',
        refund: '退款查询',
        refund_ex: '预退款查询'
    },
    currentChannel: ''
})

export default function bill(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_BILLS_CHANNEL:
            return state.merge({ currentChannel: action.data });
        default:
            return state;

    }
}