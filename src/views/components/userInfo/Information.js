/**
 *Created by  on 18/12/10.
 */
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from './NavigationBar';
import { TimeCalculate } from '../../../utils/Utils';
import "./Information.css";
export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="Information">
                <Navigation title="/" bHome={true}/>
                <div className="IconDiv">
                    <img className="Icon" src={this.props.userInfo.avatar_url} alt={this.props.userInfo.loginname}/>
                    <span>{this.props.userInfo.loginname}</span>
                </div>
                <ul>
                    <div>
                        <span>{`${this.props.userInfo.score}积分`}</span>
                    </div>
                    {!!this.props.userInfo.githubUsername ? <li>
                        <FontAwesomeIcon icon={["fab","github"]}></FontAwesomeIcon>
                        <a  rel="noopener noreferrer" target="_blank" href={`https://github.com/${this.props.userInfo.githubUsername}`}>{`@${this.props.userInfo.githubUsername}`}</a>
                    </li> : ''}
                </ul>
                <p className="CreateTime">{`注册时间${TimeCalculate(this.props.userInfo.create_at)}`}</p>
            </div>
        );
    }
}