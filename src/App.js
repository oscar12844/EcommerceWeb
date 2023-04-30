import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Reading from "./dashboard/components/Reading";
import Writing from "./dashboard/components/Writing";
import Speaking from "./dashboard/components/Speaking";
import Listening from "./dashboard/components/Listening";
import Course from "./dashboard/App";
import EnrolledLive from "./dashboard/components/EnrolledLive";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <Header />
                <CourseHome />
                <Footer />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Header />
                <Team />
                <Footer />
              </>
            }
          />
          <Route
            path="/mycourse"
            element={
              <>
                <Course />
              </>
            }
          />
          <Route
            path="/reading"
            element={
              <>
                <Reading />
              </>
            }
          />

          <Route
            path="/writing"
            element={
              <>
                <Writing />
              </>
            }
          />

          <Route
            path="/speaking"
            element={
              <>
                <Speaking />
              </>
            }
          />

          <Route
            path="/listening"
            element={
              <>
                <Listening />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <div>404 Not Found</div>
              </>
            }
          />
          <Route
            path="/live"
            element={
              <>
                <EnrolledLive />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
