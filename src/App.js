import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route exact path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route exact path="/courses">
            <Header />
            <CourseHome />
            <Footer />
          </Route>

          <Route exact path="/team">
            <Header />
            <Team />
            <Footer />
          </Route>

          <Route exact path="/realtimepair">
            <Header />
            <RealtimePair />
            <Footer />
          </Route>

          <Route exact path="/journal">
            <Header />
            <Blog />
            <Footer />
          </Route>

          <Route exact path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route exact path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
