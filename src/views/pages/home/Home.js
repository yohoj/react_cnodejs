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
            limit: 20,
            data: [],
        };
    }

    onNavigationChange = async (tab) => {
        this.tab = tab;
        this.page = 1;
        this.setState({tab:tab});
        const {data} = await getTopics({
            tab:this.tab,
            page:this.page,
            limit: this.state.limit,
        });
        this.setState({data:data});
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