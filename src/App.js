import "./App.css";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Subscribe from "./components/footer/Subscribe";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about-us/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contacts from "./pages/contacts/Contacts";
import Blog from "./pages/blog/Blog";
import MainEvent from "./pages/events/MainEvent";
import CoursesFather from './pages/courses-single/CourseFather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const HomeRenderer = ({ hovered }) => {
  return (
    <>
      <Homepage />
    </>
  );
};
export { HomeRenderer };

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomeRenderer />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/about/:id"
          element={<About />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<MainEvent />} />
        <Route path="/courses" element={<CoursesFather />} />
      </Routes>
      <Subscribe />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
