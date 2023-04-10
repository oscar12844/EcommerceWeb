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
import Reading from "./components/readingnotes/Reading";
import Writing from "./components/writingnotes/Writing";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/realtimepair" component={RealtimePair} />
          <Route exact path="/mycourse" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/reading" component={Reading} />
          <Route exact path="/writing" component={Writing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
