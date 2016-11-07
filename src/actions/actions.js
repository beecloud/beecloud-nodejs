import * as types from '../const/const';
export function changeBillChannel(channel) {
    return {
        type: types.CHANGE_BILL_CHANNEL,
        data: channel
    }
}


export function bill() {
    return (dispatch, getState) => {
        const channel = getState().bill.get('currentChannel');
        window.open(`/bill/${channel}`)
    }
}


export function changeBillsChannel(channel){
    return {
        type:types.CHANGE_BILLS_CHANNEL,
        data:channel
    }
}

export function bills(type) {
    return (dispatch, getState) => {
        const channel = getState().bills.get('currentChannel');
        window.open(`/bills/${type}/${channel}`)
    }
}

export function changePermissionType(channel){
    return {
        type:types.CHANGE_PERMISSION_TYPE,
        data:channel
    }
}
export function getPermission(){
    return (dispatch,getState)=>{
        window.open(`/auth`);
    }
}

export function changeCheckoffType(channel){
    return {
        type:types.CHANGE_CHECKOFF_TYPE,
        data:channel
    }
}

export function checkoff(){
    return (dispatch,getState)=>{
        window.open(`/checkoff`)
    }
}

export function changeTransferType(channel){
    return{
        type:types.CHANGE_TRANSFER_TYPE,
        data:channel
    }
}

export function transfer(){
    return (dispatch, getState) => {
        const channel = getState().transfer.get('currentChannel');
        window.open(`/transfer/${channel}`)
    }
}

export function changeSubscriptionAction(channel){
    return {
        type:types.CHANGE_SUBSCRIPTION_ACTION,
        data:channel
    }
}

export function subscription(){
    return (dispatch,getState)=>{
        const channel = getState().subscription.get('currentChannel');
        window.open(`/transfer/${channel}`)
    }
}

export function queryById(id,type){
    window.open(`/queryById/${id}/${type}`)
}