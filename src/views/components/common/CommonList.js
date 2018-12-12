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
                <Link to={`/userInfo/${this._item.author.loginname}`} title={this._item.author.loginname}>
                    <img className="Icon" src={this._item.author.avatar_url} alt={this._item.author.loginname}/>
                </Link>
                <div className="Container">
                    {!!this._item.visit_count ? <p className="Numbers">{this._item.reply_count + '/' + this._item.visit_count}</p> : ''}
                    {!!this._item.tab ? <p className={this._item.good? 'Good' : this._item.top ? 'Top' : 'Tab'}>{this.tabs[this._item.good? 'good': this._item.top ? 'top' : this._item.tab]}</p> : ''}
                    <Link className="Title" to={`/content/${this._item.id}`} title={this._item.title}>{this._item.title}</Link>
                </div>
                <span>{TimeCalculate(this._item.last_reply_at)}</span>
                </li>
            </div>
        );
    }
}