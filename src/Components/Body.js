import React from 'react'
import ReactDOM from 'react-dom';

const heading=React.createElement('h1',{id:"title"},"Hello, I am here");
console.log(heading);
//jsx format
// const jsxHeading=<h1 id="title">Hello, I am here</h1>;
// console.log(jsxHeading);

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)

const jsxHeading=<h1 id="heading">hello world</h1>;
console.log(jsxHeading);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading)

//functioal component
const HeadingFunction=()=>{
    return <h1 id="title">Hello, I am here</h1>
}

export default Body;