import Immutable from 'immutable';
import * as types from '../const/const';
let initialState = Immutable.fromJS({
    channels: [
        {
            name: 'WX_SCAN',
            imgPath: 'http://beeclouddoc.qiniudn.com/wechats.png'
        },
        {
            name:'ALI_SCAN',
            imgPath:'http://beeclouddoc.qiniudn.com/alis.png'
        },
        {
            name:'WX_NATIVE',
            imgPath:'http://beeclouddoc.qiniudn.com/wechat.png',
        },
        {
            name:'ALI_OFFLINE_QRCODE',
            imgPath:'http://beeclouddoc.qiniudn.com/ali.png'
        }
    ],
    btnText:'查询',
    currentChannel: ''
})

export default function bill(state = initialState, action) {
    switch(action.type){
        case types.CHANGE_OFFLINE_STATUS:
            return state.merge({ currentChannel: action.data });
        default:
            return state;
    }
}