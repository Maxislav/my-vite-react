//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './style/main.less';
import { useRoutes } from 'react-router-dom';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.tsx";
import {About} from "./pages/about.tsx";
import {routesConfig} from "./router.tsx";

//
// function App() {
//     return (
//         <div className="app-container">
//             <nav>
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                 </ul>
//             </nav>
//
//             <hr />
//
//
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="*" element={<div>404 - Not Found</div>} />
//             </Routes>
//         </div>
//     );
// }

function App() {
    // Хук принимает конфиг и возвращает дерево компонентов
    const element = useRoutes(routesConfig);
    return element;
}


// function App() {
//   //const [count, setCount] = useState(0)
//
//   return (
//       <div className="app-layout">
//           <nav>
//               <Link to="/">Home</Link> | <Link to="/about">About</Link>
//           </nav>
//           <hr />
//           <main>
//               {/* Child components (Home/About) render here */}
//               <Outlet />
//           </main>
//       </div>
//   )
// }

export default App
