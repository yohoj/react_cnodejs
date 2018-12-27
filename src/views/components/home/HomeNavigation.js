import React, {Component} from 'react';
import { connect } from 'react-redux';
import { switchHomeTabAction } from '../../../actions';
import './HomeNavigation.css';
class HomeNavigation extends Component {
    itemList = [
                {tab: 'all', str: '全部'}, 
                {tab: 'good', str: '精华'}, 
                {tab: 'share', str: '分享'}, 
                {tab: 'ask', str: '问答'},
                {tab: 'job', str: '招聘'},
            ];
    constructor(props){
        super(props)
        this.props.callbackParent('all');
    }

    onClick = (tab,e)=>{
        this.props.switchHomeTab(tab);
        this.props.callbackParent(tab);
        // this.setState({tab:tab}, this.tabClick);
    }

    tabClick = async ()=>{
        this.props.callbackParent(this.state.tab);
    }

    render() {
        let {tab} = this.props;
        return (
            <div className="HomeNavigation">
                <ul>
                    {this.itemList.map((item,index) => {
                        return (
                                <li  key={item.tab} className={tab === item.tab ? "NavigationBg" : ""} onClick={this.onClick.bind(this,item.tab)}>{item.str}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      tab: state.switchHomeTab,
    }
  }
function mapDispatchToProps(dispatch) {
    return {
        switchHomeTab: async (tab) => {
            dispatch(switchHomeTabAction(tab))
        },
    }
  }
  
  // Action Creator

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeNavigation)
