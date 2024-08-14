import logo from './logo.svg';
import './App.css';
import UserRegistration from './components/view/UserLogin/UserRegistration';
import Navbar from './components/view/LandingPage/Navbar';
import HeroSection from './components/view/LandingPage/HeroSection';
import ServicesSection from './components/view/LandingPage/ServicesSection';
import TestimonialsSection from './components/view/LandingPage/TestimonialsSection';
import Footer from './components/view/LandingPage/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <Footer/>
     <UserRegistration/>
    </div>
  );
}

export default App;
