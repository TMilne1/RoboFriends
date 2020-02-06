import React from 'react';
import Card from './card';

 

const Cardlist = ({robots})=>{

    return(
        <div>
            {robots.map(robot => {
                return (
                   <Card name={robot.name} email={robot.email} id={robot.id} />
                )   
            })}
        </div>
        
         
    );
}

export default Cardlist;