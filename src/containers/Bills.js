import React from 'react';
import * as config from '../const/config';
import md5 from 'md5';
import {postman} from '../actions/request.js';
import classnames from 'classnames';
import PureComponent from '../components/PureComponent';

let refundData = {},
    skip = 0,
    limit = 10;
export default class Bills extends PureComponent {
    constructor(){
        super();
        this.state = {
            orders:[],
            showRefundPanel:false,
            count:0
        }
    }



    getBills() {
        let data = {}, _this = this;
        data.channel = this.props.params.channel;//根据不同场景选择不同的支付方式	
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        //data.limit = 20;//默认为10，最大为50. 设置为10表示只返回满足条件的10条数据
        //start_time - 毫秒时间戳, 13位
        //end_time - 毫秒时间戳, 13位
        data.spay_result = true;
        data.limit = limit;
        data.skip = skip;
        postman({
            type: 'post',
            url: config.interfaceUrls.bills,
            data: data,
            success: function (res) {
                _this.setState({ orders: res.bills })
            }
        })
    }

    getBillsCount(){
        let data = {},_this = this;
        data.channel = this.props.params.channel;//根据不同场景选择不同的支付方式	
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        //data.limit = 20;//默认为10，最大为50. 设置为10表示只返回满足条件的10条数据
        //start_time - 毫秒时间戳, 13位
        //end_time - 毫秒时间戳, 13位
        data.spay_result = true;
        data.limit = limit;
        data.skip = skip;
        postman({
            type: 'post',
            url: config.interfaceUrls.billsCount,
            data: data,
            success: function (res) {
                _this.setState({count:res.count})
            }
        })
    }

      getRefunds() {
        let data = {}, _this = this;
        data.channel = this.props.params.channel;//根据不同场景选择不同的支付方式	
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        //start_time - 毫秒时间戳, 13位
        //end_time - 毫秒时间戳, 13位
        data.need_approval = this.props.params.type==='refunds'?false:true;
        data.limit = limit;//默认为10，最大为50. 设置为10表示只返回满足条件的10条数据
        data.skip = skip;
        postman({
            type: 'post',
            url: config.interfaceUrls.refunds,
            data: data,
            success: function (res) {
                _this.setState({ orders: res.refunds })
            }
        })
    }

    getRefundsCount(){
        let data = {}, _this = this;
        data.channel = this.props.params.channel;//根据不同场景选择不同的支付方式	
        data.timestamp = new Date().valueOf();//时间戳，毫秒数	
        //start_time - 毫秒时间戳, 13位
        //end_time - 毫秒时间戳, 13位
        data.need_approval = this.props.params.type==='refunds'?false:true;
        data.limit = limit;//默认为10，最大为50. 设置为10表示只返回满足条件的10条数据
        data.skip = skip;
        postman({
            type: 'post',
            url: config.interfaceUrls.billsCount,
            data: data,
            success: function (res) {
                _this.setState({count:res.count})
            }
        })
    }

    componentDidMount(){
        if(this.props.params.type==='bills'){
            // this.getBillsCount();
            this.getBills();
        }else{
            this.getRefunds();
            this.getRefundsCount();
        }
    }

    getDate(milliseconds){
        const date = new Date(milliseconds);
        return `${date.getFullYear()}-${this.checkTime(date.getMonth()+1)}-${this.checkTime(date.getDate())} ${this.checkTime(date.getHours())}:${this.checkTime(date.getMinutes())}:${this.checkTime(date.getSeconds())}`
    }

    checkTime(num){
        return num<10?('0'+num):num
    }

    //退款 step=1 打开或关闭退款金额弹窗  2  退款 type=1 退款 2 预退款
    refund(step,param){
        if(param){
            refundData = param;
        }
        if(step===1){
            this.setState({showRefundPanel:!this.state.showRefundPanel})
        }else{
            let data = refundData,_this = this;
            data.channel = this.props.params.channel;//根据不同场景选择不同的支付方式	
            data.timestamp = new Date().valueOf();//时间戳，毫秒数	
            //格式为:退款日期(8位) + 流水号(3~24 位)。请自行确保在商户系统中唯一，
            //且退款日期必须是发起退款的当天日期,同一退款单号不可重复提交，否则会造成退款单重复。
            //流水号可以接受数字或英文字符，建议使用数字，但不可接受“000”	
            data.refund_no ='20161103847373854738';
            data.refund_fee = parseInt(this.refs.fee.value);
            //用户自定义的参数，将会在webhook通知中原样返回，该字段主要用于商户携带订单的自定义数据	
            data.optional = {"key1":"value1","key2":"value2"};
            postman({
                type: 'post',
                url: config.BACK_END_HOST + 'api/refund',
                data: data,
                success: function (res) {
                    alert(data.need_approval?'预退款成功':'退款成功');
                    _this.setState({showRefundPanel:!_this.state.showRefundPanel})
                }
            })
        }
    }
    
    /**
     * 
     * 
     * @param {any} type - 操作类型 
     * 0 - 首页
     * 1 - 上一页
     * 2 - 下一页
     * 3 - 尾页
     * @memberOf Bills
     */
    changePage(type){
        switch(type){
            case 0:
                skip = 0;
                break;
            case 1:
                skip -= limit;
                break;
            case 2:
                skip += limit;
                break;
            case 3:
                skip = this.state.count%limit?(this.state.count-this.state.count%limit):(this.state.count-limit);
                break;
            default:
                console.error('参数错误')
        }
        if(this.props.params.type==='bills'){
            this.getBills();
        }else{
            this.getRefunds();
        }
    }

    render(){
        let refundPanelClasses = classnames({'fee-input':true,'show':this.state.showRefundPanel});
        return (
            <div style={{'textAlign':'center','paddingTop':'10px','position':'relative'}}>
                <div  style={{'margin':'0 auto','display':'inline-block'}}>
                    <table  cellPadding={0} cellSpacing={0}>
                        <tbody>
                            <tr>
                            <td>ID</td>
                            <td>同意退款</td>
                            <td>预退款</td>
                            <td>是否支付</td>
                            <td>创建时间</td>
                            <td>总价（分）</td>
                            <td>渠道类型</td>
                            <td>订单号</td>
                            <td>订单标题</td>
                        </tr>
                    {
                        this.state.orders.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>
                                <a className="pointer" onClick={this.refund.bind(this,1,{
                                    bill_no:item.bill_no,
                                    need_approval:false
                                })}>退款</a>
                            </td>
                            <td>
                                <a className="pointer" onClick={this.refund.bind(this,1,{
                                    bill_no:item.bill_no,
                                    need_approval:true
                                })}>预退款</a>
                            </td>
                            <td>{
                                (()=>{
                                    if(item.revert_result){
                                        return '已撤销';
                                    }else if(item.refund_result){
                                        return '已退款';
                                    }else if(item.spay_result){
                                        return '已支付';
                                    }else{
                                        return '未支付';
                                    }
                                }
                                )()}
                            </td>
                            <td>{(()=>this.getDate(item.create_time))()}</td>
                            <td>{item.total_fee}</td>
                            <td>{item.sub_channel}</td>
                            <td>{item.bill_no}</td>
                            <td>{item.title}</td>
                        </tr>
                    )
                }
                        </tbody>
                    </table>
                    <ul className="page-control">
                        <li onClick={this.changePage.bind(this,0)}><a>首页</a></li>
                        <li onClick={this.changePage.bind(this,1)}><a>上一页</a></li>
                        <li>{skip+1}-{(skip+limit)>this.state.count?this.state.count:(skip+limit)}条</li>
                        <li>共{this.state.count}条</li>
                        <li onClick={this.changePage.bind(this,2)}><a>下一页</a></li>
                        <li onClick={this.changePage.bind(this,3)}><a>尾页</a></li>
                    </ul>
                </div>
                <div className={refundPanelClasses}>
                    <input ref="fee"></input>
                    <p className="color-red">请输入退款金额</p>
                    <button style={{'marginRight':'10px'}} onClick={this.refund.bind(this,1)}>取消</button>
                    <button onClick={this.refund.bind(this,2,null)}>确定</button>
                </div>
            </div>
        )
    }
}


