/**
 *Created by  on 18/12/12.
 */
import React, {Component} from 'react';
import { getTopicById } from '../../../utils/WebServices';
import { TimeCalculate, showHtml } from '../../../utils/Utils';
import NavigationBar from '../../components/common/NavigationBar';
import Comment from '../../components/content/Comment';
import { connect } from 'react-redux';
import { getTopicContentAction } from '../../../actions';
import { withRouter } from 'react-router-dom';
import './Content.css';

class Content extends Component {
    tabs = {
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招聘',
        top: '置顶',
    };

    async componentDidMount() {
        let id = this.props.id;
        this.props.getTopicContent(id);
    }

    componentWillUnmount() {
    }


    render() {
        let { data, id } = this.props;
        if(!data || !data.title || data.id !== id){
            return ('');
        }
        return (
            <div className="Content">
                    <div className="Detail">
                        <div>
                            {!!data.top ? <span className="TopSpan">置顶</span> : ''}
                            <span className="TitleSpan">{data.title}</span>
                            <ul className="DetailUl">
                                <li>{`发布于${TimeCalculate(data.create_at)}`}</li>
                                <li>{`作者${data.author.loginname}`}</li>
                                <li>{`${data.visit_count}次浏览`}</li>
                                <li>{`来自于${this.tabs[data.tab]}次浏览`}</li>
                            </ul>
                        </div>
                        {showHtml(data.content)}
                    </div>   
                    <div className="CommentList">
                        <NavigationBar title={`${data.replies.length}回复`}/>
                        {data.replies.map((item,index) => {
                            return <Comment bAuthor= {item.author.loginname === data.author.loginname} floor={index+1} data={item} key={`content_${item.id}`}/>
                        })}
                    </div> 
            </div>
        );
    }
}

function mapStateToProps(state,ownProps) {
    return {
        data: state.getTopicContent,
        id: ownProps.match.params.id,
    }
  }
function mapDispatchToProps(dispatch) {
    return {
        getTopicContent: async (id) => {
            
            const {data}  = await getTopicById(id);
            dispatch(getTopicContentAction(data))
        },
    }
  }
  
  // Action Creator

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content))