import React from 'react'

export const Body = () => {
  return (
    <div className='body'>
        <div> <button onClick={()=>{console.log("clicked")}}>Click</button></div>
        <div>
        <button onClick={()=>{console.log("clicked")}}>BUY</button>
        </div>
    </div>

    
  ) 
};
export default Body

