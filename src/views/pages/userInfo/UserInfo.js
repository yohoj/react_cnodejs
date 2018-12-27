/**
 *Created by yh on 18/12/09.
 */
import React, { Component } from 'react';
import Information from "../../components/userInfo/Information";
import Topics from "../../components/userInfo/Topics";
import { getUserByName } from "../../../utils/WebServices";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserInfoAction } from "../../../actions";
import './UserInfo.css';
class UserInfo extends Component {

    async componentDidMount() {
        let userName = this.props.userName;
        this.props.updateUserInfo(userName);
        
    }

    shouldComponentupdate(){
        return false;
    }

    componentWillUnmount() {
    }

    render() {
        const { userInfo } = this.props;
        if(!userInfo || !userInfo.recent_replies || userInfo.loginname !== this.props.userName){
            return (
                <div>

                </div>
            );
        }
        return (
            <div className="UserInfo">
               <Information userInfo={userInfo}/>
               <Topics type="replies" list={userInfo.recent_replies}/>
               <Topics type="topics" list={userInfo.recent_topics}/>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps) {
    console.log(ownProps);
    return {
        userInfo: state.getUserInfo,
        userName: ownProps.match.params.userName,
    }
  }
function mapDispatchToProps(dispatch) {
    return {
        updateUserInfo: async (userName) => {
            
            const {data} = await getUserByName(userName);
            dispatch(getUserInfoAction(data))
        },
    }
  }
  
  // Action Creator
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserInfo))