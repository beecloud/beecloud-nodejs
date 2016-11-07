import Immutable from 'immutable';
import * as types from '../const/const';
let initialState = Immutable.fromJS({
    channels: [
        {
            name: 'query_banks',
            imgPath: 'http://beeclouddoc.qiniudn.com/img-querybank.png'
        },
        {
            name: 'send_code',
            imgPath: 'http://beeclouddoc.qiniudn.com/img-sendmessage.png'
        },
        {
            name: 'query_plan_bycondition',
            imgPath: 'http://beeclouddoc.qiniudn.com/img-queryplan.png'
        },
        {
            name: 'create_subscription',
            imgPath: 'http://beeclouddoc.qiniudn.com/icon-subscriptions700x200.png'
        },
        {
            name: 'cancel_subscription',
            imgPath: 'http://beeclouddoc.qiniudn.com/img-cancelsubscription.png'
        },
        {
            name: 'query_subscription_bycondition',
            imgPath: 'http://beeclouddoc.qiniudn.com/img-querysubscriptions.png'
        },
    ],
    btnText:'发起操作',
    currentChannel: ''
})

export default function bill(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_SUBSCRIPTION_ACTION:
            return state.merge({ currentChannel: action.data });
        default:
            return state;

    }
}