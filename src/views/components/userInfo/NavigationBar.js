/**
 *Created by yh on 18/12/10.
 */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./NavigationBar.css";
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="navigationBar">
                {this.props.bHome ? <Link to="/">主页</Link>:''}
                <span>{this.props.title}</span>
            </div>
        );
    }
}