import './App.css';
import './styles/layout.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import DishDetail from './Components/DishDetail';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <div className="grid-layout">
        <Header className="header" />
        <main className="main">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/order-online" element={<OrderOnline />} />
              <Route path="/menu/:id" element={<DishDetail />} />
              <Route path="/order-online/:id" element={<DishDetail />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;
