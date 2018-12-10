/**
 *Created by yh on 18/12/09.
 */
import React, { Component } from 'react';
import Information from "../../components/userInfo/Information";
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
        console.log(data);
        this.setState({userInfo:data});
        
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="userInfo">
               <Information/>
            </div>
        );
    }
}