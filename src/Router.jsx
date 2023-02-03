import { Routes, Route } from 'react-router-dom';
import Home from './view/Home';
import Java from './view/languages/Java';
import Javascript from './view/languages/Javascript';
import Navbar from './view/navbar/Navbar';

function Router() {

  return (
    <div className="Router">
        
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/java" element={<Java />} />
            <Route path="/js" element={<Javascript />} />
        </Routes>
    </div>
  );
}

export default Router;
