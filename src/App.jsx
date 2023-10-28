import { Routes, Route } from "react-router-dom"

import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";

import Homepage from "./pages/Homepage"
import Kelaspage from "./pages/Kelaspage"
import Faqpage from "./pages/Faqpage"
import Snkpage from "./pages/Snkpage"
import Testimonialpage from "./pages/Testimonialpage"

function App() {
return <div>
    <NavbarComponent/>
    <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/kelas" Component={Kelaspage}/>
        <Route path="/testimonial" Component={Testimonialpage}/>
        <Route path="/faq" Component={Faqpage}/>
        <Route path="/syaratketen" Component={Snkpage}/>
    </Routes>
    <FooterComponent/>
 </div>
}

export default App