import Immutable from 'immutable';
import * as types from '../const/const';
let initialState = Immutable.fromJS({
    channels: [
        {
            name: 'WX_REDPACK',
            imgPath: 'http://beeclouddoc.qiniudn.com/wx_redpack.png'
        },
        {
            name: 'WX_TRANSFER',
            imgPath: 'http://beeclouddoc.qiniudn.com/wx_transfer.png'
        },
        {
            name: 'BC_TRANSFER',
            imgPath: 'http://beeclouddoc.qiniudn.com/icon-companypay.png'
        },
        {
            name: 'ALI_TRANSFER',
            imgPath: 'http://beeclouddoc.qiniudn.com/ali.png'
        }
    ],
    btnText:'确认打款',
    currentChannel: ''
})

export default function bill(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TRANSFER_TYPE:
            return state.merge({ currentChannel: action.data });
        default:
            return state;

    }
}