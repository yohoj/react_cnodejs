import React, {Component} from 'react';
import './HomeNavigation.css';
export default class HomeNavigation extends Component {
    itemList = [
                {tab: 'all', str: '全部'}, 
                {tab: 'good', str: '精华'}, 
                {tab: 'share', str: '分享'}, 
                {tab: 'ask', str: '问答'},
                {tab: 'job', str: '招聘'},
                {tab: 'test', str: '客户端测试'}
            ];
    constructor(props){
        super(props);
        this.state = {
            tab: 'all',
        };
        this.tabClick();
    }

    onClick = (tab,e)=>{
        console.log('tab:',tab);
        this.setState({tab:tab}, this.tabClick);
    }

    tabClick = async ()=>{
        this.props.callbackParent(this.state.tab);
    }

    render() {
        return (
            <div className="HomeNavigation">
                <ul>
                    {this.itemList.map((item,index) => {
                        return (
                                <li  key={item.tab} className={this.state.tab === item.tab ? "NavigationBg" : ""} onClick={this.onClick.bind(this,item.tab)}>{item.str}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
