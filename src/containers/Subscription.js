import React from 'react';
import * as config from '../const/config';
import {postman} from '../actions/request.js';
import PureComponent from '../components/PureComponent';

export default class Subscription extends PureComponent {
   
    query(){
        let data = {},_this = this;
        data.id = this.props.params.id;
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        data.type = this.props.params.type;
        postman({
            type:'post',
            url:config.interfaceUrls.queryById,
            data:data,
            success:(res)=>{
                _this.setState({billInfo:data.type==='bill'?res.pay:res.refund})
            }
        })

    }

    subscriptionHandler(){
        switch(this.props.params.type){
        case 'query_banks': //获取银行列表
            this.banks();
            break;
        case 'send_code': //获取手机验证码
            this.sms();
            break;
        case 'create_plan'://创建plan
            this.create_plan();
            break;
        case 'update_plan': //更新plan
            this.update_plan();
            break;
        case 'del_plan': //删除plan
            this.del_plan();
            break;
        case 'query_plan_bycondition': //按照条件查询plan
            this.query_plan_bycondition();
            break;
        case 'query_plan_byid': //按照ID查询plan
            this.query_plan_byid();
            break;
        case 'create_subscription'://创建subscription
            this.create_subscription();
            break;
        case 'update_subscription': //更新subscription
            this.update_subscription();
            break;
        case 'cancel_subscription': //取消subscription
            this.cancel_subscription();
            break;
        case 'query_subscription_bycondition'://按照条件查询subscription
            this.query_subscription_bycondition();
            break;
        case 'query_subscription_byid': //按照ID查询subscription
            this.query_subscription_byid();
            break;
        default:
            alert('No this type!');
            break;
    }
    }

    componentDidMount(){
    }

     getDate(milliseconds){
        const date = new Date(milliseconds);
        return `${date.getFullYear()}-${this.checkTime(date.getMonth()+1)}-${this.checkTime(date.getDate())} ${this.checkTime(date.getHours())}:${this.checkTime(date.getMinutes())}:${this.checkTime(date.getSeconds())}`
    }

    checkTime(num){
        return num<10?('0'+num):num
    }

    render(){
        return (
            <div></div>            
        )
    }
}


