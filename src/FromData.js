import React from 'react';

const FromData =(props)=>{
  return(
    <>
    <h2>User Information</h2>
              <ul className="userData">
                <li>{props.nameprint} </li>
                <li>{props.emailprint}</li>
              </ul>
    </>
    )
}

export default FromData