/**
 *Created by yh on 19/01/08.
 */
import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import { accessToken } from '../../../utils/WebServices';
import { loginAction } from '../../../actions/';
import './Login.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {

  }
  componentWillUnmount() {

  }

  onBtnLoginClick = async () => {
    await this.props.accessToken(this.input.state.value);
    this.props.history.push('/');
  }
  render() {
    return ( 
      <div className = "Login">
        <div className = 'InputDiv'>
          <Input size="large" placeholder="点击输入" ref={input => this.input = input}/>
          <Button className="BtnLogin" type="primary" onClick={this.onBtnLoginClick}>登陆</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: ''};
}

const mapDispatchToProps = (dispatch) => {
  return {
    accessToken: async (token)=>{
      const userInfo = await accessToken(token);
      window.localStorage.setItem('token',token);
      dispatch(loginAction(userInfo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)