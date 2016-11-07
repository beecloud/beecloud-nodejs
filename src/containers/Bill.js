import React from 'react';
import * as config from '../const/config';
import md5 from 'md5';
import { postman } from '../actions/request.js';
import QRCode from 'qrcode.react';
import PureComponent from '../components/PureComponent';


export default class Bill extends PureComponent {
    constructor() {
        super();
        this.state = {
            qrUrl: '',
        }
    }

    componentDidMount() {
        let data = {}, _this = this;
        data.channel = this.props.params.channel;//根据不同场景选择不同的支付方式	
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        data.total_fee = 1;//total_fee(int 类型) 单位分
        data.bill_no = `bcdemo${data.timestamp}`;//8到32位数字和/或字母组合，请自行确保在商户系统中唯一，同一订单号不可重复提交，否则会造成订单重复
        data.title = `node德玛西亚${data.channel}test`;//title UTF8编码格式，32个字节内，最长支持16个汉字
        data.optional = { tag: 'msgtoreturn' };//用户自定义的参数，将会在webhook通知中原样返回，该字段主要用于商户携带订单的自定义数据
        data.bill_timeout = 360;//选填必须为非零正整数，单位为秒，建议最短失效时间间隔必须大于360秒，京东(JD*)不支持该参数。	
        switch (data.channel) {
            case 'ALI_WEB':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                data.show_url = 'http://beecloud.cn';//商品展示地址以http://开头
                break;
            case 'ALI_QRCODE':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                //注： 二维码类型含义
                // 0： 订单码-简约前置模式, 对应 iframe 宽度不能小于 600px, 高度不能小于 300px
                // 1： 订单码-前置模式, 对应 iframe 宽度不能小于 300px, 高度不能小于 600px
                // 3： 订单码-迷你前置模式, 对应 iframe 宽度不能小于 75px, 高度不能小于 75px
                data.qr_pay_mode = '0';
                break;
            case 'ALI_WAP':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                data.use_app = true;
                break;
            case 'UN_WEB':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                break;
            case 'UN_WAP':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                break;
            case 'JD_WAP':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                break;
            case 'JD_WEB':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                break;
            case 'BD_WEB':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                break;
            case 'BD_WAP':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                break;
            case 'WX_JSAPI':
                data.openid = '0950c062-5e41-44e3-8f52-f89d8cf2b6eb';
                break;
            case 'YEE_WEB':
                data.return_url = "https://beecloud.cn";//当channel参数为 ALI_WEB 或 ALI_QRCODE 或 UN_WEB 或 JD_WAP 或 JD_WEB时为必填
                break;
            case 'YEE_WAP':
                data.identity_id = 'lengthlessthan50useruniqueid';//50位以内数字和/或字母组合，易宝移动网页（一键）支付用户唯一标识符，用于绑定用户一键支付的银行卡信息
                break;
            case 'YEE_NOBANKCARD':
                data.cardno = '15078120125091678';//点卡卡号，每种卡的要求不一样，例如易宝支持的QQ币卡号是9位的，江苏省内部的QQ币卡号是15位，易宝不支付
                data.cardpwd = "121684730734269992";//点卡密码，简称卡密
                //点卡类型编码，骏网一卡通(JUNNET),盛大卡(SNDACARD),神州行(SZX),
                //征途卡(ZHENGTU),Q币卡(QQCARD),联通卡(UNICOM),久游卡(JIUYOU),
                //易充卡(YICHONGCARD),网易卡(NETEASE),完美卡(WANMEI),搜狐卡(SOHU),
                //电信卡(TELECOM),纵游一卡通(ZONGYOU),天下一卡通(TIANXIA),天宏一卡通(TIANHONG),
                //32 一卡通(THIRTYTWOCARD)
                data.frqid = "SZX";
                break;
            case 'BC_GATEWAY':
                /*
                 * bank(string 类型) for channel BC_GATEWAY
                 * CMB	  招商银行    ICBC	工商银行   CCB   建设银行(暂不支持)
                 * BOC	  中国银行    ABC    农业银行   BOCM	交通银行
                 * SPDB   浦发银行    GDB	广发银行   CITIC	中信银行
                 * CEB	  光大银行    CIB	兴业银行   SDB	平安银行
                 * CMBC   民生银行    NBCB   宁波银行   BEA   东亚银行
                 * NJCB   南京银行    SRCB   上海农商行 BOB   北京银行
                 */
                data.bank = "BOC";
                break;
            default:
        }

        postman({
            type: 'post',
            url: 'http://localhost:3002/api/bill',
            data: data,
            success: function (res) {
                if (res.html) {
                    document.write(res.html);
                } else if (res.url) {
                    window.location.href = res.url;
                } else if (res.code_url) {
                    _this.setState({
                        qrUrl: res.code_url
                    });
                }
            }

        })
    }

    render() {

        return this.state.qrUrl ? (<div style={{ 'textAlign': 'center', 'paddingTop': '20%' }}>
            <QRCode value={this.state.qrUrl} />
            <p>微信扫码打开</p>
        </div>) : <div></div>
    }
}


