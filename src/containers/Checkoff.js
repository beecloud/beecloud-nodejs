import React from 'react';
import * as config from '../const/config';
import {postman} from '../actions/request.js';
import PureComponent from '../components/PureComponent';

export default class Auth extends PureComponent {
    

    checkoff(){
        //第一步: 获取验证码,得到参数sms_id, sms_code: 请查看手机收到的验证码
        let data = {},_this = this;
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        data.phone = '1862500xxxx';
        postman({
            type:'post',
            url:config.interfaceUrls.sms,
            data:data,
            success:function(res){

            }
        })

        /*
         * 第二步: 签约API, 配置webhook,签约成功之后, 获取到card_id(注意保存)
         * 具体参数含义如下:
         *   mobile 手机号
         *   bank  银行名称
         *   id_no 身份证号
         *   name   姓名
         *   card_no 银行卡号(借记卡,不支持信用卡)
         *   sms_id  获取验证码接口返回验证码记录的唯一标识
         *   sms_code 手机端接收到验证码
         */
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        data.app_id = config.APP_ID;//App在BeeCloud平台的唯一标识	
        data.app_secret = config.APP_SECRET;
        data.mobile = '1862500xxxx';
        data.bank = '中国银行';
        data.id_no = '413026xxxxxxxxxxx';
        data.name = 'xuqi';
        data.card_no = 'card_no';
        data.sms_id = 'd4fb7cdd-13ff-4c6c-ac57-df5aee717988';
        data.sms_code = '374932';
        postman({
            type:'post',
            url:config.interfaceUrls.sign,
            data:data,
            success:function(res){

            }
        })

        //第三步: 通过第二步取到card_id,进行支付
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        data.app_id = config.APP_ID;//App在BeeCloud平台的唯一标识	
        data.app_secret = config.APP_SECRET;
        data.card_id = '21e58f1c-de22-4979-a95c-3dfxxxxxx';
        postman({
            type:'post',
            url:config.interfaceUrls.bill,
            data:data,
            success:function(res){

            }
        })
    }
    



    render(){
        return (
            <div></div>
        )
    }
}


