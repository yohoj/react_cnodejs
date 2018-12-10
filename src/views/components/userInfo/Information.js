/**
 *Created by  on 18/12/10.
 */
import React, {Component} from 'react';
import Navigation from './NavigationBar';
export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Navigation title="/" bHome={true}/>
                <div>
                    {/* <img src=""/> */}
                    <span>name</span>
                </div>
                <ul>

                </ul>
            </div>
        );
    }
}