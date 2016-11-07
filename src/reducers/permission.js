import Immutable from 'immutable';
import * as types from '../const/const';
let initialState = Immutable.fromJS({
    channels: [
        {
            name: 'jq',
            imgPath: 'http://beeclouddoc.qiniudn.com/icon-jianquan.png'
        },
    ],
    btnText:'确认鉴权',
    currentChannel: ''
})

export default function bill(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_PERMISSION_TYPE:
            return state.merge({ currentChannel: action.data });
        default:
            return state;

    }
}