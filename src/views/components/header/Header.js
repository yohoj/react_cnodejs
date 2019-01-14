import React, {Component } from 'react';
import {PropTypes} from 'prop-types';
import logo from '../../../assets/image/cnodejs.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { accessToken } from '../../../utils/WebServices';
import { loginAction } from '../../../actions/'
import './Header.css';
class Header extends Component {
    listItems = [[{title:'首页',link:'/'},{title:'关于',link:'/about'} ,{title:'退出',link:'exit'}],[{title:'首页',link:'/'},{title:'登陆',link:'/login'},{title:'关于',link:'/about'}]];
    constructor(props){
        super(props);
        this.state = {visible: false};
    }

    async componentDidMount(){
      if(this.props.userInfo.id){
        return;
      }
      let token = window.localStorage.getItem('token');
      if(!token){
        return;
      }
      const userInfo = await accessToken(token);
      this.props.updateUserInfo(userInfo);
    }

    showAbout = () => {
        
    }

    onBtnClick = (data, evt) => {
      switch (data) {
        case '/':
          this.props.history.push('/');
          break;
        case '/about':
          break;
        case 'exit':
          this.props.userInfo = {};
          break;
        case '/login':
        this.props.history.push('/login');
          break;
        default:
          break;
      }
    }

    render() {
      console.log(this.props);
      const index = this.props.userInfo.id ? 0 : 1;
        return (
            <div className="Header">
                <div>
                <a href="/">
                    <img
                        src={logo}
                        alt="网站logo"
                    />
                </a>
                <ul>
                    {this.listItems[index].map((val, index) => {
                      return <li key={index}onClick={this.onBtnClick.bind(this,val.link)}>
                        {val.title}
                      </li>})}
                </ul>
                {/* <span onClick={this.showAbout}>关于</span> */}
            </div>
            </div>
            
        );
    }
    
};
Header.contextTypes = {
  router: PropTypes.object.isRequired
};
console.log(Header.contextTypes);

const mapStateToProps = (state) => {
  return {userInfo:state.login}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo: (userInfo)=>{
      dispatch(loginAction(userInfo));
    }
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));