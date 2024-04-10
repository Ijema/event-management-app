import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import BookingsPage from './Pages/BookingsPage';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import SignUpLogin from './Pages/SignUpLogin';
import Wedding from './Components/Wedding';
import Concert from './Components/Concert';
import Meeting from './Components/Meeting';
import Conference from './Components/Conference';
import { PortfolioContext } from './Context/PortfolioContext';
import banner from './Components/Assets/Book-Us-Now-header.png'
import SelectedPortfolio from './Components/SelectedPortfolio/SelectedPortfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/wedding' element={<SelectedPortfolio banner={banner} category="wedding" />} />
          <Route path='/concert' element={<SelectedPortfolio banner={banner} category="concert" />} />
          <Route path='/birthday' element={<SelectedPortfolio banner={banner} category="birthday" />} />
          <Route path='/conference' element={<SelectedPortfolio banner={banner} category="conference" />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/login" element={<SignUpLogin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
