import React from 'react'

//reacts built in rendering takes in html param, and html document get to define where this html goes
//This is JSX
//ReactDOM.render(<div><h1>Hello World!</h1><p>This is a paragraph</p></div>, document.getElementById('root'));

export default function MyOrderedList() {
    return (
        <ul>   
            <li>This is item 1</li>
            <li>This is item 2</li>
            <li>This is item 3</li>
        </ul>
    );
};