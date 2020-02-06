import React,{Component} from 'react';
import Searchbox from './searchbox';
import Cardlist from './cardList';
import Scroll from './Scroll';
import './App.css';



class App extends Component {
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                return response.json();
            })
            .then(users => { 
                this.setState({ robots:users})})
    }

    searchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filtered = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
            if(this.state.robots.length < 1){
                return(
                    <div className='tc'>
                        <div>
                            <h1 className='f2'>RoboFriends</h1>
                            <Searchbox search={this.searchChange} />
                        </div>
                        <div>
                        <h1>...Loading</h1>
                        </div>
                    </div>
                )
            }else{}
                return(
                    <div className='tc'>
                        
                            <h1 className = 'f2'>RoboFriends</h1>
                            <Searchbox search = {this.searchChange}/>
                        
                        <Scroll>
                            <Cardlist robots={filtered} />
                        </Scroll>
                    </div>
                )
            
        }
    

}

export default App;