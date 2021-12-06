import logo from '../../logo.svg';
import './AppWrapper.css';

import { useLocation } from 'react-router-dom';

export const AppWrapper = ({children})=>{

    const location = useLocation();

    return (
        <div className="App">
            <header className="App-header">
                <h1>Spring + React Template</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <h3>Current path : {location.pathname}</h3>
                {children}
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
}