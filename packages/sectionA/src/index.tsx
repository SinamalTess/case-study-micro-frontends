import React from 'react'
import ReactDOM from 'react-dom'

export const ReactApp = () => {
    console.log('React application loaded')

    return <p>React Application</p>
}

ReactDOM.render(<ReactApp />, document.getElementById('sectionAContainer')) // Mind the name here, it can't be the same as the exposed name of the microfontend
