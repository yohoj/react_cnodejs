/**
 *Created by  on 18/12/12.
 */
import React, {Component} from 'react';
import { getTopicById } from '../../../utils/WebServices';
import { TimeCalculate, showHtml } from '../../../utils/Utils';
import NavigationBar from '../../components/common/NavigationBar';
import Comment from '../../components/content/Comment';
import './Content.css';
export default class Content extends Component {
    tabs = {
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘',
        top: '置顶',
    };
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        const {data} = await getTopicById(id);
        this.setState({data:data});
    }

    componentWillUnmount() {
    }


    render() {
        if(!this.state.data){
            return ('');
        }
        return (
            <div className="Content">
                    <div className="Detail">
                        <div>
                            {!!this.state.data.top ? <span className="TopSpan">置顶</span> : ''}
                            <span className="TitleSpan">{this.state.data.title}</span>
                            <ul className="DetailUl">
                                <li>{`发布于${TimeCalculate(this.state.data.create_at)}`}</li>
                                <li>{`作者${this.state.data.author.loginname}`}</li>
                                <li>{`${this.state.data.visit_count}次浏览`}</li>
                                <li>{`来自于${this.tabs[this.state.data.tab]}次浏览`}</li>
                            </ul>
                        </div>
                        {showHtml(this.state.data.content)}
                    </div>   
                    <div className="CommentList">
                        <NavigationBar title={`${this.state.data.replies.length}回复`}/>
                        {this.state.data.replies.map((item,index) => {
                            return <Comment bAuthor= {item.author.loginname === this.state.data.author.loginname} floor={index+1} data={item} key={`content_${item.id}`}/>
                        })}
                    </div> 
            </div>
        );
    }
}