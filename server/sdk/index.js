const config = require('./lib/config');
const util = require('./lib/util');


class BCRESTApi {
    //支付
    bill(param) {
        return new Promise((resolve, reject) => {
            const neededParam = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    channel: 'string',
                    total_fee: 'number',
                    bill_no: 'string',
                    title: 'string',
                },
                channel: {
                    WX_JSAPI: {
                        openid: 'string'
                    },
                    ALI_WEB: {
                        show_url: 'string',
                        return_url: 'string'
                    },
                    ALI_WAP: {
                        use_app: 'boolean'
                    },
                    ALI_QRCODE: {
                        qr_pay_mode: 'string',
                        return_url: 'string'
                    },
                    YEE_WAP: {
                        identity_id: 'string'
                    },
                    YEE_NOBANKCARD: {
                        cardno: 'string',
                        cardpwd: 'string',
                        frqid: 'string'
                    },
                    UN_WEB: {
                        return_url: 'string'
                    },
                    UN_WAP: {
                        return_url: 'string'
                    },
                    JD_WEB: {
                        return_url: 'string'
                    },
                    JD_WAP: {
                        return_url: 'string'
                    }
                }
            }
            const url = this.test ?config.URI_TEST_BILL: config.URI_BILL;
            util.postman({
                path: url,
                type: 'post',
                data: param,
                neededData: neededParam,
                target:this//BCRESTApi对象
            }).then((res) => {
                resolve(res);
            })
        })
    }


    //退款
    refund(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    refund_no: 'string',
                }
            }
            util.postman({
                path: config.URI_REFUND,
                type: 'post',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    //预退款批量审核
    refunds(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    channel: 'string',
                    ids: 'array',
                    agree: 'boolean'
                }
            }
            util.postman({
                path: config.URI_REFUND,
                type: 'put',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    //订单查询
    getBills(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                }
            }
            const url = !this.test ? config.URI_BILLS : config.URI_TEST_BILLS;
            util.postman({
                path: url,
                type: 'GET',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    //订单总数查询
    getBillsCount(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                }
            }
            const url = !this.test ? config.URI_BILLS_COUNT : config.URI_TEST_BILLS_COUNT;
            util.postman({
                path: url,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }


    //退款查询
    getRefunds(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                }
            }
            util.postman({
                path: config.URI_REFUNDS,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }


    //退款总数查询
    getRefundsCount(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                }
            }
            util.postman({
                path: config.URI_REFUNDS_COUNT,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    //退款状态更新
    getRefundStatus(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    channel: 'string',
                    refund_no: 'string'
                }
            }
            util.postman({
                path: config.URI_REFUND_STATUS,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    //退款订单查询
    getRefundById(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    id: 'string',
                }
            }
            util.postman({
                path: config.URI_REFUND + '/' + param.id,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    //支付订单查询
    getBillById(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    id: 'string'
                }
            }
            util.postman({
                path: config.URI_BILL + '/' + param.id,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }


    //鉴权
    auth(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    name: 'string',
                    id_no: 'string'
                }
            }
            util.postman({
                path: config.URI_AUTH,
                type: 'post',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }


    /**
     * @desc: 发送短信
     *
     * @param $data
     *   phone 手机号
     *
     * @return json
     */
    sms(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    phone: 'string',
                }
            }
            util.postman({
                path: config.URI_SUBSCRIPTION_SMS,
                type: 'post',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    /**
     * @desc: 签约API
     *
     * @param $data
     *   mobile 手机号
     *   bank  银行名称
     *   id_no 身份证号
     *   name   姓名
     *   card_no 银行卡号(借记卡,不支持信用卡)
     *   sms_id  获取验证码接口返回验证码记录的唯一标识
     *   sms_code 手机端接收到验证码
     *
     * @return json
     */
    sign(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    mobile: 'string',
                    bank: 'string',
                    id_no: 'string',
                    name: 'string',
                    card_no: 'string',
                    sms_id: 'string',
                    sms_code: 'string'
                }
            }
            util.postman({
                path: config.URI_CARD_CHARGE_SIGN,
                type: 'post',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }


    /**
     * @desc: 打款到银行卡
     *
     * @param $data
     * total_fee 打款订单总金额   必须是正整数,单位为分
     * bill_no  商户订单号  8到32位数字和/或字母组合，请自行确保在商户系统中唯一，同一订单号不可重复提交，否则会造成订单重复	
     * title 打款订单标题 UTF8编码格式，32个字节内，最长支持16个汉字	
     * trade_source  交易源	UTF8编码格式，目前只能填写OUT_PC	
     * bank_fullname 银行全称 中国银行，而不能写成"中行",因为“中行”也是中信银行和中兴银行的缩写	
     * card_type 银行卡类型	DE代表借记卡，CR代表信用卡，其他值为非法	
     * account_type 帐户类型，P代表私户，C代表公户，其他值为非法	
     * account_no	收款方的银行卡号	
     * account_name	收款方的姓名或者单位名	
     * mobile 银行绑定的手机号 银行绑定的手机号，当需要手机收到银行入账信息时，该值必填，前提是该手机在银行有短信通知业务，否则收不到银行信息	
     * optional 用户自定义的参数，将会在Webhook通知中原样返回，该字段主要用于商户携带订单的自定义数据
     * @return json
     */
    bcTransfer(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    total_fee: 'number',
                    bill_no: 'string',
                    title: 'string',
                    trade_source: 'string',
                    bank_fullname: 'string',
                    card_type: 'string',
                    account_type: 'string',
                    account_no: 'string',
                    account_name: 'string',
                }
            }
            util.postman({
                path: config.URI_BC_TRANSFER,
                type: 'post',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    /**
     * @desc: 企业打款支持银行
     *
     * @param $data
     * 
     * type - 业务类型 - P_DE:对私借记卡,P_CR:对私信用卡,C:对公账户	
     * 
     * @return json
     */
    transferBanks(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    type: 'string'
                }
            }
            util.postman({
                path: config.URI_BC_TRANSFER_BANKS,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }


    /**
     * @desc: 微信企业打款/微信红包/支付宝单笔打款
     *
     * @param 
     * total_fee - 打款订单总金额 - 此次打款的金额,单位分,正整数(微信红包1.00-200元，微信打款>=1元)
     * channel - 根据不同场景选择不同的支付方式 - WX_REDPACK, WX_TRANSFER, ALI_TRANSFER
     * transfer_no - 打款单号 - 支付宝为11-32位数字字母组合， 微信企业打款为8-32位数字字母组合，微信红包为10位数字	
     * desc - 打款说明
     * channel_user_id - 用户ID - 支付渠道方内收款人的标示, 微信为openid, 支付宝为支付宝账户	
     * channel_user_name - 支付渠道内收款人账户名， 支付宝必填	
     * redpack_info - 微信红包的详细描述，详见附注, 微信红包必填	
     * account_name - 打款方账号名全称，支付宝必填	
     * redpack_info - send_name	String	红包发送者名称 32位	BeeCloud
                        wishing	String	红包祝福语 128 位	BeeCloud祝福开发者工作顺利!
                        act_name String	红包活动名称 32位	BeeCloud开发者红包轰动 
     * 
     * @return json
     */
    transfer(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    channel: 'string',
                    transfer_no: 'string',
                    total_fee: 'number',
                    desc: 'string',
                    channel_user_id: 'string',
                },
                channel: {
                    ALI_TRANSFER: {
                        channel_user_name: 'string',
                        account_name: 'string'
                    },
                    WX_REDPACK: {
                        redpack_info: 'object'
                    }
                }
            }
            util.postman({
                path: config.URI_BC_TRANSFER,
                type: 'post',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }

    /**
     * @desc: 微信企业打款/微信红包/支付宝单笔打款
     *
     * @param 
     * channel - 根据不同场景选择不同的支付方式 - 目前只支持ALI
     * batch_no - 打款单号 - 支付宝为11-32位数字字母组合		
     * account_name - 付款方名称 - 付款账号账户全称	
     * transfer_data - 付款详细	- 包含每一笔的具体信息(参见注释)
     *          transfer_id	String	打款流水号	0315006
                receiver_account	String	收款方账户	someone@126.com
                receiver_name	String	收款方账号姓名	支付宝某人
                transfer_fee	Int	打款金额，单位为分	10
                transfer_note	String	打款备注	赔款
	
     * 
     * @return json
     */
    transfers(param) {
        return new Promise((resolve, reject) => {
            const neededData = {
                common: {
                    app_id: 'string',
                    timestamp: 'number',
                    app_sign: 'string',
                    channel: 'string',
                    batch_no: 'string',
                    account_name: 'string',
                    transfer_data: 'array'
                }
            }
            util.postman({
                path: config.URI_BC_TRANSFER_BANKS,
                type: 'get',
                data: param,
                neededData: neededData,
                target:this//BCRESTApi对象
            }).then(value => {
                resolve(value);
            })
        })
    }
    /**
     * @desc 注册APP
     */
    registerApp(appId, appSecret, masterSecret, testSecret) {
        this.data = {
            app_id: appId,
            app_secret: appSecret,
            master_secret: masterSecret,
            test_secret: testSecret,
        }

    }

    //是否开启测试模式  默认关闭
    setSandbox(ifTest) {
        this.test = ifTest;
    }
}

module.exports = BCRESTApi;
