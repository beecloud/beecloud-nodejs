module.exports = {
    //server
    randomServer: 'apidynamic.beecloud.cn',//随机指向以下某个地址
    servers: [
        'apibj.beecloud.cn',//北京
        'apisz.beecloud.cn',//深圳
        'apiqd.beecloud.cn',//青岛
        'apihz.beecloud.cn'//杭州
    ],
    server:'api.beecloud.cn',//暂时用这个地址
    URI_BILL: '/2/rest/bill', //支付,支付订单查询(指定id)
    URI_TEST_BILL: '/2/rest/sandbox/bill',
    URI_BILLS: '/2/rest/bills', //订单查询
    URI_TEST_BILLS: '/2/rest/sandbox/bills',
    URI_BILLS_COUNT: '/2/rest/bills/count', //订单总数查询
    URI_TEST_BILLS_COUNT: '/2/rest/sandbox/bills/count',

    URI_REFUND: "/2/rest/refund",		//退款,预退款批量审核,退款订单查询(指定id)
    URI_REFUNDS: "/2/rest/refunds",		//退款查询
    URI_REFUNDS_COUNT: "/2/rest/refunds/count", //退款总数查询
    URI_REFUND_STATUS: "/2/rest/refund/status", //退款状态更新

    URI_TRANSFERS: "/2/rest/transfers", //批量打款 - 支付宝
    URI_TRANSFER: "/2/rest/transfer",  //单笔打款 - 支付宝/微信
    URI_BC_TRANSFER_BANKS: '/2/rest/bc_transfer/banks', //BC企业打款 - 支持银行
    URI_BC_TRANSFER: "/2/rest/bc_transfer", //代付 - 银行卡

    URI_OFFLINE_BILL: '/2/rest/offline/bill', //线下支付-撤销订单
    URI_OFFLINE_BILL_STATUS: '/2/rest/offline/bill/status', //线下订单状态查询
    URI_OFFLINE_REFUND: '/2/rest/offline/refund', //线下退款

    URI_INTERNATIONAL_BILL: "/2/rest/international/bill",
    URI_INTERNATIONAL_REFUND: "/2/rest/international/refund",


    //subscription
    URI_SUBSCRIPTION: "/2/subscription",
    URI_SUBSCRIPTION_PLAN: "/2/plan",
    URI_SUBSCRIPTION_BANKS: "/2/subscription_banks",
    URI_SUBSCRIPTION_SMS: "/2/sms",
    URI_AUTH: "/2/auth",


    UNEXPECTED_RESULT: "非预期的返回结果:",
    NEED_PARAM: "需要必填字段:",
    NEED_VALID_PARAM: "字段值不合法:",
    NEED_WX_JSAPI_OPENID: "微信公众号支付(WX_JSAPI) 需要openid字段",
    NEED_RETURN_URL: "当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或JD_WAP 或 JD_WEB时 return_url为必填",
    NEED_IDENTITY_ID: "当channel参数为 YEE_WAP时 identity_id为必填",
    BILL_TIMEOUT_ERROR: "当channel参数为 JD* 不支持bill_timeout",
    NEED_QR_PAY_MODE: '当channel参数为 ALI_QRCODE时 qr_pay_mode为必填',
    NEED_CARDNO: '当channel参数为 YEE_NOBANKCARD时 cardno为必填',
    NEED_CARDPWD: '当channel参数为 YEE_NOBANKCARD时 cardpwd为必填',
    NEED_FRQID: '当channel参数为 YEE_NOBANKCARD时 frqid为必填',
    NEED_TOTAL_FEE: '当channel参数为 BC_EXPRESS时 total_fee单位分,最小金额100分',
    VALID_BC_PARAM: 'APP ID,APP Secret参数值均不能为空,请重新设置',
    VALID_SIGN_PARAM: 'APP ID, timestamp,APP(Master) Secret参数值均不能为空,请设置',
    VALID_MASTER_SECRET: 'Master Secret参数值不能为空,请设置',
    VALID_APP_SECRET: 'APP Secret参数值不能为空,请设置',

    VALID_PARAM_RANGE: '参数 %s 不在限定的范围内, 请重新设置',
}
