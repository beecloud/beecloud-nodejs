import React from 'react';
import PureComponent from './PureComponent';
import ChannelIcon from './ChannelIcon';

export default class ChannelList extends PureComponent {
    render() {
        const {channels,currentChannel,action} = this.props;
        return (
            <div className="channels-wrapper">
                {channels.toJS().map((item, index) =>
                    <ChannelIcon action={action} selected={item.name===currentChannel} channel={item.name} imgPath={item.imgPath} key={index}/>
                ) }
            </div>
        )
    }
}