import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import RealtimePair from "./components/Realtime/RealtimePair";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Reading from "./components/readingnotes/Reading";
import Writing from "./components/writingnotes/Writing";
import Course from "./dashboard/App"
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
            path="/realtimepair"
            element={
              <>
                <Header />
                <RealtimePair />
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
                <Header />
                <Reading />
                <Footer />
              </>
            }
          />

          <Route
            path="/writing"
            element={
              <>
                <Header />
                <Writing />
                <Footer />
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
