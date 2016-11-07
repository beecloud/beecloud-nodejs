import Immutable from 'immutable';
let initialState = Immutable.fromJS({
    btnText: {
        bills: '订单查询',
        refund: '退款查询',
    },
})

export default function bill(state = initialState, action) {
    return state;
}