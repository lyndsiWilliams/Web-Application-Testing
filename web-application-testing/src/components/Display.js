import React from 'react';

export const Display = (props) => {
  return(
    <div>
      <h3>Balls: {props.ballsData}</h3>
      <h3>Strikes: {props.strikeData}</h3>
    </div>
  );
}