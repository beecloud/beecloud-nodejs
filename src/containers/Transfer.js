import React from 'react';
import * as config from '../const/config';
import { postman } from '../actions/request.js';
import PureComponent from '../components/PureComponent';

export default class Transfer extends PureComponent {



    transfer() {
        let data = {}, _this = this, channel = this.props.params.channel;
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        if (channel === 'BC_TRANSFER') {
            data.total_fee = 1;
            data.bill_no = `bc企业打款xxxxxxxxxxx`;
            data.title = '白开水';
            data.trade_source = 'OUT_PC';//UTF8编码格式，目前只能填写OUT_PC	
            data.bank_fullname = '中国银行';//中国银行，而不能写成"中行",因为“中行”也是中信银行和中兴银行的缩写	
            data.card_type = 'DE';//DE代表借记卡，CR代表信用卡，其他值为非法	
            data.account_type = 'P';//帐户类型，P代表私户，C代表公户，其他值为非法	
            data.account_no = '6222691921993848888';//收款方银行卡号
            data.account_name = '周杰伦';//收款方账户名称
            data.mobile = '13888888888';//银行绑定的手机号，当需要手机收到银行入账信息时，该值必填，前提是该手机在银行有短信通知业务，否则收不到银行信息	
            postman({
                type: 'post',
                url: config.interfaceUrls.bcTransfer,
                data: data,
                success: function (res) {

                }
            })
        } else {
            data.channel = channel;
            data.transfer_no = 'udjfiienx2334';//支付宝为11-32位数字字母组合， 微信企业打款为8-32位数字字母组合，微信红包为10位数字	
            data.total_fee = 100;//此次打款的金额,单位分,正整数(微信红包1.00-200元，微信打款>=1元)	
            data.desc = '赔偿';//此次打款的说明	
            data.channel_user_id = 'someone@126.com';//支付渠道方内收款人的标示, 微信为openid, 支付宝为支付宝账户	
            switch (channel) {
                case 'WX_REDPACK':
                    data.redpack_info = {
                        send_name: 'beecloud',//红包发送者名称 32位	
                        wishing: 'BeeCloud祝福开发者工作顺利!',//红包祝福语 128 位	
                        act_name: 'BeeCloud开发者红包轰动'//红包活动名称 32位	
                    };
                    break;
                case 'ALI_TRANSFER':
                    data.channel_user_name = '支付宝某人';//支付渠道内收款人账户名， 支付宝必填	
                    data.account_name = '苏州比可网络科技有限公司';//打款方账号名称,支付宝必填
                    break;
                default:
            }
            postman({
                type: 'post',
                url: config.interfaceUrls.transfer,
                data: data,
                success: function (res) {
                    location.href = res.url;
                }
            })
        }


    }


    componentDidMount() {
        this.transfer();
    }

    render() {
        return (
            <div></div>
        )
    }
}


