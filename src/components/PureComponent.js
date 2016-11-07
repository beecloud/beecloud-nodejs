/* eslint-disable */
import React,{Component} from 'react';
import shallowEqual from '../lib/shallowEqual';

export default class PureComponent extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return !shallowEqual(this.props, nextProps) ||!shallowEqual(this.state, nextState);
    }
}