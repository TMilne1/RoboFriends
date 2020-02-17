import React,{Component} from 'react';
import {connect} from 'react-redux'
import Searchbox from '../Components/searchbox';
import Cardlist from '../Components/cardList';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundary from '../ErrorBoundary';
import {setSearchField} from '../actions'

const mapStateToProps=(state)=>{
    
    return ({
        searchField: state.searchField
    })
}
const  mapDispatchToProps=(dispatch)=>{
    return {
        searchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {
    constructor(){
        super();
        this.state={
            robots: [],

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

    render(){
        const {robots} = this.state;
        const  {searchField,searchChange} =this.props
     
        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
            if(robots.length < 1){
                return(
                    <div className='tc'>
                        <div>
                            <h1 className='f2'>RoboFriends</h1>
                            <Searchbox search={searchChange} />
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
                            <Searchbox search = {searchChange}/>
                        <ErrorBoundary>
                            <Scroll>
                                <Cardlist robots={filtered} />
                            </Scroll>
                        </ErrorBoundary>
                    </div>
                )
            
        }
    

}

export default connect(mapStateToProps, mapDispatchToProps)(App);