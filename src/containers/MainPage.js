import React, {PropTypes } from 'react';
import PureComponent from '../components/PureComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../components/Button';
import ChannelList from '../components/ChannelList';
import * as actions from '../actions/actions';


class MainPage extends PureComponent {
    render() {
        return (
            <div className="page">
                <div className="page-unit">
                    <div className="font-size-bigger">
                        应付总额：￥0.01
                    </div>
                    <div className="font-size-primary">
                        请选择支付方式
                    </div>
                    <ChannelList action={this.props.action.changeBillChannel} currentChannel={this.props.billCurrentChannel} channels={this.props.billChannels} />
                    <Button action={this.props.action.bill} text={this.props.billBtnText}/>
                    <hr/>
                </div>
                <div className="page-unit">
                    <div className="font-size-bigger">
                       订单查询及发起退款，退款查询，退款状态查询
                    </div>
                    <div className="font-size-primary">
                        请选择渠道进行操作
                    </div>
                    <ChannelList action={this.props.action.changeBillsChannel} currentChannel={this.props.billsCurrentChannel} channels={this.props.billsChannels} />
                    <Button action={this.props.action.bills.bind(this,'bills')} text={this.props.billsBtnText.bills}/>
                    <Button action={this.props.action.bills.bind(this,'refunds')} text={this.props.billsBtnText.refund}/>
                    <Button action={this.props.action.bills.bind(this,'preRefunds')} text={this.props.billsBtnText.refund_ex}/>
                    <hr/>
                </div>
                <div className="page-unit">
                    <div className="font-size-bigger">
                        鉴权
                    </div>
                    <div className="font-size-primary">
                        请选择鉴权
                    </div>
                    <ChannelList action={this.props.action.changePermissionType} currentChannel={this.props.permissionCurrentChannel} channels={this.props.permissionChannels} />
                    <Button action={this.props.action.getPermission} text={this.props.permissionBtnText}/>
                    <hr/>
                </div>
                <div className="page-unit">
                    <div className="font-size-bigger">
                        代扣：￥1.5
                    </div>
                    <div className="font-size-primary">
                        请选择支付方式
                    </div>
                    <ChannelList action={this.props.action.changeCheckoffType} currentChannel={this.props.checkoffCurrentChannel} channels={this.props.checkoffChannels} />
                    <Button action={this.props.action.checkoff} text={this.props.checkoffBtnText}/>
                    <hr/>
                </div>
                <div className="page-unit">
                    <div className="font-size-bigger">
                        微信、支付宝企业打款
                    </div>
                    <div className="font-size-primary">
                        请选择渠道进行操作
                        <br/>
                        注:单个微信红包金额介于[1.00元，200.00元]之间
                    </div>
                    <ChannelList action={this.props.action.changeTransferType} currentChannel={this.props.transferCurrentChannel} channels={this.props.transferChannels} />
                    <Button action={this.props.action.transfer} text={this.props.transferBtnText}/>
                    <hr/>
                </div>
                {
                    // <div className="page-unit">
                    // <div className="font-size-bigger">
                    //     订阅操作
                    // </div>
                    // <div className="font-size-primary">
                    //     请选择操作方式
                    // </div>
                    // <ChannelList action={this.props.action.changeSubscriptionAction} currentChannel={this.props.subscriptionCurrentChannel} channels={this.props.subscriptionChannels} />
                    // <Button action={this.props.action.subscription} text={this.props.subscriptionBtnText}/>
                    // <hr/>
                    // </div>
                }
                <div className="page-unit">
                    <div className="font-size-bigger">
                        根据ID查询订单记录、退款记录
                    </div>
                    <div className="font-size-primary">
                        请输入ID:
                    </div>
                    <div>
                        <input ref="billId"/>
                    </div>
                    <Button action={()=>{this.props.action.queryById(this.refs.billId.value,'bill')}} text={this.props.queryByIdBtnText.bills}/>
                    <Button action={()=>{this.props.action.queryById(this.refs.billId.value,'refund')}} text={this.props.queryByIdBtnText.refund}/>
                    <hr/>
                </div>
                <div className="page-unit">
                    <div className="font-size-bigger">
                        根据bill_no查询线下订单状态
                    </div>
                    <div className="font-size-primary">
                        请输入bill_no:
                    </div>
                    <div>
                        <input ref="billNo"/>
                    </div>
                    <div className="font-size-primary">
                        请选择渠道:
                    </div>
                    <ChannelList action={this.props.action.changeOfflineType} currentChannel={this.props.offlineCurrentChannel} channels={this.props.offlineChannels} />
                    <Button action={()=>(this.props.action.getOfflineStatus(this.refs.billNo.value))} text={this.props.offlineBtnText}/>
                    <hr/>
                </div>
            </div>
        )
    }
}

MainPage.PropTypes = {
    billChannels: PropTypes.object.isRequired,
    billBtnText: PropTypes.string
}

function mapStateToProps(state) {
    return {
        billChannels: state.bill.get('channels'),
        billBtnText: state.bill.get('btnText'),
        billCurrentChannel: state.bill.get('currentChannel'),
        billsChannels:state.bills.get('channels'),
        billsBtnText:state.bills.get('btnText').toJS(),
        billsCurrentChannel:state.bills.get('currentChannel'),
        permissionChannels:state.permission.get('channels'),
        permissionBtnText:state.permission.get('btnText'),
        permissionCurrentChannel:state.permission.get('currentChannel'),
        checkoffChannels:state.checkoff.get('channels'),
        checkoffBtnText:state.checkoff.get('btnText'),
        checkoffCurrentChannel:state.checkoff.get('currentChannel'),
        transferChannels:state.transfer.get('channels'),
        transferBtnText:state.transfer.get('btnText'),
        transferCurrentChannel:state.transfer.get('currentChannel'),
        subscriptionChannels:state.subscription.get('channels'),
        subscriptionBtnText:state.subscription.get('btnText'),
        subscriptionCurrentChannel:state.subscription.get('currentChannel'),
        queryByIdBtnText:state.queryById.get('btnText').toJS(),
        offlineChannels:state.offlineStatus.get('channels'),
        offlineBtnText:state.offlineStatus.get('btnText'),
        offlineCurrentChannel:state.offlineStatus.get('currentChannel')

        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)