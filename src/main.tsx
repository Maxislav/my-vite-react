//import './index.css'
import React from 'react'
import ReactDOM, {type Container} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App';


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



ReactDOM.createRoot(document.getElementById('root') as Container).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);