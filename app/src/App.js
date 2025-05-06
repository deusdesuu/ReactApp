import Navbar from "./Navbar"
import Reign from "./pages/Reign"

import Home from "./pages/Home"
import Bio from "./pages/Bio"
import Domestic from "./pages/Domestic"
import Foreign from "./pages/Foreign"
import Feedback from "./pages/Feedback"


import { Route, Routes } from "react-router-dom"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <div className="ReignPic">
                <Reign />
            </div>
            <div className="component">
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/domestic" element={<Domestic />} />
                    <Route path="/foreign" element={<Foreign />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </div>
        </>
    )
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return null;
}

export default App