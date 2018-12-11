/**
 *Created by yh on 18/12/09.
 */
import React, { Component } from 'react';
import Information from "../../components/userInfo/Information";
import Topics from "../../components/userInfo/Topics";
import { getUserByName } from "../../../utils/WebServices";
import './UserInfo.css';
export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{},
        };
    }

    async componentDidMount() {
        let userName = this.props.match.params.userName;
        const {data} = await getUserByName(userName);
        this.setState({userInfo:data});
        
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="UserInfo">
               <Information userInfo={this.state.userInfo}/>
               <Topics type="replies" list={this.state.userInfo.recent_replies}/>
               <Topics type="topics" list={this.state.userInfo.recent_topics}/>
            </div>
        );
    }
}