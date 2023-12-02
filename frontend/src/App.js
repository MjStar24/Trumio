import logo from './logo.svg';
import './App.css';
import Post from './components/Post.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Achievements from "./components/Crousel_Achievements/Achievements";
import AchievementCarousel from "./components/Crousel_Achievements/AchievementCarousel"
import MentorCard from './components/MentorCard';
import ProfileCard from './components/ProfileCard';
import Mentor from './pages/Mentor.js';
import Home from './pages/Home.js';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route exact path="/mentor" element={<Mentor />} />
        <Route exact path="/development" element={<Mentor />} />
        <Route exact path="/design" element={<AchievementCarousel items={items1} />} />
        <Route exact path="/marketing" element={<ProfileCard props={props}/>} /> */}
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
