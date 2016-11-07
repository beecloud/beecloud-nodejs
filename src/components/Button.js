import React from 'react';
import PureComponent from './PureComponent';


export default class Button extends PureComponent{
    render(){
        const {text,action} = this.props;
        return (
            <button onClick={action} className="btn btn-primary font-size-bigger mr-primary">
                {text}
            </button>
        )
    }
}