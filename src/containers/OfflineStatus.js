import React from 'react';
import * as config from '../const/config';
import { postman } from '../actions/request.js';
import PureComponent from '../components/PureComponent';

export default class OfflineStatus extends PureComponent {



    getStatus() {
        let data = {}, _this = this, 
            {channel,billNo} = this.props.params;
            data.channel = channel;
            data.bill_no = billNo;
            data.timestamp = new Date().valueOf();//时间戳，毫秒数	
            postman({
                type: 'post',
                url: config.interfaceUrls.offlineStatus,
                data: data,
                success: function (res) {

                }
            })
    }


    componentDidMount() {
        this.getStatus();
    }

    render() {
        return (
            <div></div>
        )
    }
}


