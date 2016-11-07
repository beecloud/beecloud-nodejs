import Immutable from 'immutable';
import * as types from '../const/const';
let initialState = Immutable.fromJS({
    channels: [
        {
            name: 'checkoff',
            imgPath: 'http://beeclouddoc.qiniudn.com/icon-bcdk.png'
        },
    ],
    btnText:'确认扣款',
    currentChannel: ''
})

export default function bill(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_CHECKOFF_TYPE:
            return state.merge({ currentChannel: action.data });
        default:
            return state;

    }
}