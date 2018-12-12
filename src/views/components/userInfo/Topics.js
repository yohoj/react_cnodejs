/**
 *Created by yh on 18/12/11.
 */
import React, {Component} from 'react';
import Navigation from '../common/NavigationBar';
import CommonList from '../common/CommonList';
import './Topics.css';
export default class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getList(){
        if(!this.props.list){
            return [];
        }
        return this.props.list;
    }

    render() {
        return (
            <div className="Topics">
                <Navigation title={this.props.type === 'replies' ? '最近参与话题' : '最近创建话题'} bHome={false}/>
                {<ul>
                    
                    {this.getList().filter((value,index)=>{
                        return index <= 4;
                    }).map(item => {
                        return <CommonList key={`topics_${item.id}`} item={item}/>
                    })}
                </ul>}
            </div>
        );
    }
}