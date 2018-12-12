import React, {Component} from 'react';
import logo from '../../../assets/image/cnodejs.svg';
import './Header.css';
export default class Header extends Component {
    listItems = ['首页','未读消息','新手入门','API','关于','设置','退出'];
    constructor(props){
        super(props);
        this.state = {visible: false};
    }

    showAbout = () => {
        
    }

    render() {
        return (
            <div className="Header">
                <div>
                <a href="./">
                    <img
                        src={logo}
                        alt="网站logo"
                    />
                </a>
                <ul>
                    {this.listItems.map((val, index) => {return <li key={index}>{val}</li>})}
                </ul>
                {/* <span onClick={this.showAbout}>关于</span> */}
            </div>
            </div>
            
        );
    }
    
};