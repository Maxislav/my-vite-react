//import './index.css'
import React from 'react'
import ReactDOM, {type Container} from 'react-dom/client'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './App';
import {appConfig} from '@env-config';


// Мы используем hydrateRoot вместо render,
// чтобы React "подхватил" уже готовую разметку от сервера
// ReactDOM.hydrateRoot(
//     document.getElementById('root') as HTMLElement,
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// )

console.log('main tsx только дев csr рендер')

if (appConfig.mode === 'development') {


    ReactDOM.createRoot(document.getElementById('root') as Container).render(
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    );
} else if (appConfig.mode === 'production') {
    ReactDOM.createRoot(document.getElementById('root') as Container).render(
        <React.StrictMode>
            <HashRouter>
                <App/>
            </HashRouter>
        </React.StrictMode>
    );

}

//
