import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScrollToTop from './components/ScrollToTop'

import 'bootstrap/dist/css/bootstrap.min.css'
import './dist/css/main.css'
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { BrowserRouter as Router} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Router>
      <ScrollToTop/>
      <App/>
    </Router>
  </React.StrictMode>
)
