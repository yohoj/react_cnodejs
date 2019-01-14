import React, {Component} from 'react';
import HomeNavigation from '../../components/home/HomeNavigation';
import CommonList from '../../components/common/CommonList';
import {getTopics} from '../../../utils/WebServices';
import {connect} from 'react-redux';
import { getTopicsAction } from '../../../actions';
import './Home.css';


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    onScrollHandle = async (event) => {
        const sumH =
             document.body.scrollHeight || document.documentElement.scrollHeight
        const viewH = document.documentElement.clientHeight
        const scrollH =
             document.body.scrollTop || document.documentElement.scrollTop
        if (viewH + scrollH >= sumH) {
             this.props.onScrollHandle();
         }

    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHandle);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandle);
    }

    render() {
        const { data, onNavigationChange} = this.props;
        return (
            <div className='Home'>
                <HomeNavigation callbackParent={onNavigationChange}/>
                <ul>
                    {data.map(item => {
                        return (
                            <CommonList key={`home_${item.id}`} item={item}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
const config = {
    tab:'all',page:1,limit:40
}
function mapStateToProps(state) {
    return {
        data: state.getTopics,
    }
  }
function mapDispatchToProps(dispatch) {
    return {
        onNavigationChange: async (tab) => {
            config.tab = tab;
            config.page = 1;
            const {data} = await getTopics({
                tab:config.tab,
                page:config.page,
                limit: config.limit,
            });
            dispatch(getTopicsAction(data,true))
        },
        onScrollHandle: async () => {
            config.page++;
            const {data} = await getTopics({
                tab:config.tab,
                page:config.page,
                limit: config.limit,
            });
            dispatch(getTopicsAction(data,false))
        }
    }
  }
  
  // Action Creator

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)