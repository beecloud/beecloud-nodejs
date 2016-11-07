import React from 'react';
import * as config from '../const/config';
import {postman} from '../actions/request.js';
import PureComponent from '../components/PureComponent';

export default class QueryById extends PureComponent {
    constructor(){
        super();
        this.state = {
            billInfo:''
        }
    }
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


    componentDidMount(){
        this.query();
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
                this.state.billInfo?
                <div style={{'textAlign':'center','paddingTop':'10px','position':'relative'}}>
                {
                this.props.params.type==='bill'?
                <table  cellPadding={0} cellSpacing={0} style={{'margin':'0 auto'}}>
                    <tbody>
                        <tr>
                            <td>是否支付</td>
                            <td>创建时间</td>
                            <td>总价(分)</td>
                            <td>渠道类型</td>
                            <td>订单号</td>
                            <td>订单标题</td>
                        </tr>
                        <tr>
                            <td>{this.state.billInfo.spay_result?'支付':'未支付'}</td>
                            <td>{this.getDate(this.state.billInfo.create_time)}</td>
                            <td>{this.state.billInfo.total_fee}</td>
                            <td>{this.state.billInfo.sub_channel}</td>
                            <td>{this.state.billInfo.bill_no}</td>
                            <td>{this.state.billInfo.title}</td>
                        </tr>
                    </tbody>
                </table>
                :
                <table  cellPadding={0} cellSpacing={0} style={{'margin':'0 auto'}}>
                    <tbody>
                        <tr>
                            <td>是否退款成功</td>
                            <td>退款创建时间</td>
                            <td>退款号</td>
                            <td>订单金额(分)</td>
                            <td>退款金额(分)</td>
                            <td>渠道类型</td>
                            <td>订单号</td>
                            <td>退款是否完成</td>
                            <td>订单标题</td>
                        </tr>
                        <tr>
                            <td>{this.state.billInfo.result?'成功':'失败'}</td>
                            <td>{this.getDate(this.state.billInfo.create_time)}</td>
                            <td>{this.state.billInfo.refund_no}</td>
                            <td>{this.state.billInfo.total_fee}</td>
                            <td>{this.state.billInfo.refund_fee}</td>
                            <td>{this.state.billInfo.sub_channel}</td>
                            <td>{this.state.billInfo.bill_no}</td>
                            <td>{this.state.billInfo.finish?'完成':'未完成'}</td>
                            <td>{this.state.billInfo.title}</td>
                        </tr>
                    </tbody>
                </table>
                }
            </div>
            :
            <div></div>
            
        )
    }
}


