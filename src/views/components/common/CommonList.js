import React, {Component} from 'react';
import {TimeCalculate} from '../../../utils/Utils';
import {Link } from "react-router-dom";
import './CommonList.css'
export default class CommonList extends Component{
    _item;
    tabs = {
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘',
        top: '置顶',
    };
    constructor(props){
        super(props);
        this._item = this.props.item;
    }
    render() {
        return (
            <div className="CommonListContainer">
                <li className="CommonList">
                <Link to='/userInfo' title={this._item.author.loginname}>
                    <img className="Icon" src={this._item.author.avatar_url} alt={this._item.author.loginname}/>
                </Link>
                <div className="Container">
                    <p className="Numbers">{this._item.reply_count + '/' + this._item.visit_count}</p>
                    <p className={this._item.good? 'Good' : this._item.top ? 'Top' : 'Tab'}>{this.tabs[this._item.good? 'good': this._item.top ? 'top' : this._item.tab]}</p>
                    <a className="Title" href="/" title={this._item.title}>{this._item.title}</a>
                </div>
                <span>{TimeCalculate(this._item.last_reply_at)}</span>
                </li>
                <hr className="Hr"/>
            </div>
        );
    }
}