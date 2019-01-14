/**
 *Created by  on 18/12/12.
 */
import React, {Component} from 'react';
import {Link } from "react-router-dom";
import { TimeCalculate, showHtml } from '../../../utils/Utils';
import './Comment.css';
export default class Comment extends Component{

    _item;

    constructor(props){
    super(props);
    this._item = this.props.data;
    this.state = {};
}
async componentDidMount() {

}
componentWillUnmount() {

}

onClick = (event) => {
    let speed = 10;
    let rect=event.currentTarget.getBoundingClientRect();
    //获取元素相对窗口的top值，此处应加上窗口本身的偏移
    let top=window.pageYOffset+rect.top;
    let currentTop=window.pageYOffset;
    let requestId;
    //采用requestAnimationFrame，平滑动画
    function step(timestamp) {
      currentTop+=speed;
      if(currentTop<=top){
        window.scrollTo(0,currentTop);
        requestId=window.requestAnimationFrame(step);
      }else{
        window.cancelAnimationFrame(requestId);
      }
    }
    window.requestAnimationFrame(step);
}




render() {
    return ( 
        <div className = 'Comment' >
            <div className = 'Title'>
                <Link to={`/user/${this._item.author.loginname}`} title={this._item.author.loginname}>
                    <img className="Icon" src={this._item.author.avatar_url} alt={this._item.author.loginname}/>
                </Link>
                <Link to={`/user/${this._item.author.loginname}`}>{this._item.author.loginname}</Link>
                <span className="Floor" onClick={this.onClick}>{`${this.props.floor}楼 ${TimeCalculate(this._item.create_at)}`}</span>
                {this.props.bAuthor ? <span className="Author">作者</span> : ''}
            </div>
        
            {showHtml(this._item.content)}
        </div>
    );
}
}