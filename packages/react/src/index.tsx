import React from "react";
import ReactDOM from 'react-dom';

export const ReactApp = () => {
    console.log('React application loaded')

    return <p>React Application</p>
}

ReactDOM.render(<ReactApp />, document.getElementById('ReactApp'));
