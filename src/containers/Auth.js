import React from 'react';
import * as config from '../const/config';
import {postman} from '../actions/request.js';
import PureComponent from '../components/PureComponent';

export default class Auth extends PureComponent {
   

      
    auth(){
        let data = {},_this = this;
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        data.name = 'xuqi';
        data.id_no = '23082619860124xxxx';
        data.card_no = '6227856101009660xxx';
        data.mobile = '1555551xxxx';
        postman({
            type:'post',
            url:config.interfaceUrls.auth,
            data:data,
            success:function(res){
                alert('鉴权成功')
            }
        })
    }
    

    componentDidMount(){
        this.auth();
    }

    render(){
        return (
            <div></div>
        )
    }
}


