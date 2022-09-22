import React from 'react';
import Card from './Card.js';

const CardList = ({ robot }) => {
  if(false) {
    throw new Error("Noooo!");
  }
  return (
    <div>
        {robot.map((user , i) => {
          return <Card 
          key={i}
          id={robot[i].id}
          name={robot[i].name}
          email={robot[i].email} 
        />                                          
        })}
    </div>
  )
}

export default CardList