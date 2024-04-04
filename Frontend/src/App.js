import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import BookingsPage from './Pages/BookingsPage';
import Footer from './Components/Footer'
import Header from './Components/Header'
import SignUpLogin from './Pages/SignUpLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/signuplogin" element={<SignUpLogin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
