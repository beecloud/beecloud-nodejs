import Immutable from 'immutable';
import * as types from '../const/const';
let initialState = Immutable.fromJS({
  channels: Immutable.fromJS([
    {
      name: 'ALI_WEB',
      imgPath: 'http://beeclouddoc.qiniudn.com/ali.png'
    },
    {
      name: 'ALI_WAP',
      imgPath: 'http://beeclouddoc.qiniudn.com/aliwap.png'
    },
    {
      name: 'ALI_QRCODE',
      imgPath: 'http://beeclouddoc.qiniudn.com/alis.png'
    },
    {
      name: 'WX_NATIVE',
      imgPath: 'http://beeclouddoc.qiniudn.com/wechats.png'
    },
    {
      name: 'WX_JSAPI',
      imgPath: 'http://7xavqo.com1.z0.glb.clouddn.com/wechatgzh.png'
    },
    {
      name: 'UN_WEB',
      imgPath: 'http://beeclouddoc.qiniudn.com/unionpay.png'
    },
    {
      name: 'UN_WAP',
      imgPath: 'http://beeclouddoc.qiniudn.com/icon-unwap.png'
    },
    {
      name: 'JD_WEB',
      imgPath: 'http://beeclouddoc.qiniudn.com/jd.png'
    },
    {
      name: 'JD_WAP',
      imgPath: 'http://beeclouddoc.qiniudn.com/jdwap.png'
    },
    {
      name: 'BD_WEB',
      imgPath: 'http://beeclouddoc.qiniudn.com/bd.png'
    },
    {
      name: 'BD_WAP',
      imgPath: 'http://beeclouddoc.qiniudn.com/bdwap.png'
    },
    {
      name: 'YEE_WEB',
      imgPath: 'http://beeclouddoc.qiniudn.com/yb.png'
    },
    {
      name: 'YEE_WAP',
      imgPath: 'http://beeclouddoc.qiniudn.com/ybwap.png'
    },
    {
      name: 'YEE_NOBANKCARD',
      imgPath: 'http://beeclouddoc.qiniudn.com/ybcard.png'
    },
    {
      name: 'PAYPAL_PAYPAL',
      imgPath: 'http://beeclouddoc.qiniudn.com/paypal.png'
    },
    {
      name: 'BC_GATEWAY',
      imgPath: 'http://7xavqo.com1.z0.glb.clouddn.com/icon_gateway.png'
    },
    {
      name: 'BC_EXPRESS',
      imgPath: 'http://beeclouddoc.qiniudn.com/icon_BcExpress.png'
    },
    {
      name: 'BC_WX_WAP',
      imgPath: 'http://beeclouddoc.qiniudn.com/icon-bcwxwap.png'
    },
    {
      name: 'BC_NATIVE',
      imgPath: 'http://beeclouddoc.qiniudn.com/icon-bcwxsm.png'
    },
  ]),
  btnText: '确认付款',
  currentChannel: ''
})

export default function bill(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_BILL_CHANNEL:
      return state.merge({ currentChannel: action.data });
    default:
      return state;

  }
}