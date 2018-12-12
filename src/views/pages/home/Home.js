import React, {Component} from 'react';
import HomeNavigation from '../../components/home/HomeNavigation';
import CommonList from '../../components/common/CommonList';
import {getTopics} from '../../../utils/WebServices';
import './Home.css';


export default class Home extends Component{
    tab = 'all';
    page = 1;
    constructor(props){
        super(props);
        this.state = {
            limit: 40,
            data: [],
        };
    }

    onNavigationChange = async (tab) => {
        this.tab = tab;
        this.page = 1;
        const {data} = await getTopics({
            tab:this.tab,
            page:this.page,
            limit: this.state.limit,
        });
        this.setState({data:data});
    }

    onScrollHandle = async (event) => {
        const sumH =
             document.body.scrollHeight || document.documentElement.scrollHeight
        const viewH = document.documentElement.clientHeight
        const scrollH =
             document.body.scrollTop || document.documentElement.scrollTop
        if (viewH + scrollH >= sumH) {
             this.page++;
             const {
                 data
             } = await getTopics({
                 tab: this.tab,
                 page: this.page,
                 limit: this.state.limit,
             });
             this.setState({
                 data: [...this.state.data,...data]
             });
         }

    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollHandle);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandle);
    }

    render() {
        return (
            <div className='Home'>
                <HomeNavigation callbackParent={this.onNavigationChange}/>
                <ul>
                    {this.state.data.map(item => {
                        return (
                            <CommonList key={`home_${item.id}`} item={item}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}