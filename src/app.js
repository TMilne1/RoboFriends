import React from 'react';
import Cardlist from './cardList';
import { robots } from './robots';

const App = ()=>{
    return(
        <div>
            <div>
                <h1>RoboFriends</h1>

            </div>
            <div>
                <Cardlist robots ={robots}/>
            </div>

        </div>
    )
}
export default App;

