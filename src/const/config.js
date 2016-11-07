

//接口地址
export const BACK_END_HOST = 'http://localhost:3002/';
export const interfaceUrls = {
    bill:BACK_END_HOST+'api/bill',//支付
    bills:BACK_END_HOST+'api/bills',//订单查询
    billsCount:BACK_END_HOST+'api/billsCount',//订单总数
    refunds:BACK_END_HOST+'api/refunds',//退款查询
    refundsCount:BACK_END_HOST+'api/refundsCount',//退款总数
    refund:BACK_END_HOST+'api/refund',//退款/预退款
    queryById:BACK_END_HOST+'api/queryById',//支付/退款订单查询(指定ID)
    auth:BACK_END_HOST+'api/auth',
    sms:BACK_END_HOST+'api/sms',
    sign:BACK_END_HOST+'api/sign',
    bcTransfer:BACK_END_HOST+'api/bcTransfer',
    transfer:BACK_END_HOST+'api/transfer'
}