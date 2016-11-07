import React from 'react';
import PureComponent from './PureComponent';
import classnames from 'classnames';

export default class ChannelIcon extends PureComponent{
    render(){
        const {imgPath,channel,action,selected} = this.props;
        const classes = classnames({'channelIcon':true,'channel-selected':selected});
        return (
            <img alt="渠道图片" className={classes} onClick={action.bind(this,channel)}  src={imgPath} />
        )
    }
}