import React,{Component} from 'react';
import {robots} from './robots';
import Searchbox from './searchbox';
import Cardlist from './cardList'
import './App.css'


class App extends Component {
    constructor(){
        super();
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    searchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filtered = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
            return(
                <div className='tc'>
                    <div>
                        <h1 className = 'f2'>RoboFriends</h1>
                        <Searchbox search = {this.searchChange}/>
                    </div>
                    <div>
                        <Cardlist robots={filtered} />
                    </div>
                </div>
            )
        }
    

}

export default App;