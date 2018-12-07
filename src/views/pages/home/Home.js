import React, {Component} from 'react';
import HomeNavigation from '../../components/home/HomeNavigation';
import HomeList from '../../components/home/HomeList';
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
        window.addEventListener('scroll', this.onScrollHandle.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandle.bind(this));
    }

    render() {
        return (
            <div className='Home'>
                <HomeNavigation callbackParent={this.onNavigationChange}/>
                <ul>
                    {this.state.data.map(item => {
                        return (
                            <HomeList key={item.id} item={item}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}