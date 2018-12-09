/**
 *Created by yh on 18/12/09.
 */
import React, {
    Component
} from 'react';
export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="userName">
                <h1>详情</h1>
            </div>
        );
    }
}