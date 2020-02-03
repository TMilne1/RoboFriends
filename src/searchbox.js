import React from 'react';

const Searchbox =({search}) =>{
    return(
        <div className = 'pa2'>
           
            
                <input onChange = {search}
                    className = 'pa3 ba b--green bg-lightest-blue' 
                    type = 'text' 
                    placeholder ='Enter Name'/>
        </div>
    )

}

export default Searchbox;