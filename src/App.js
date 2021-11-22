import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-bootstrap";
import Navs from "./components/Navs";
import LandingPage from "./components/LandingPage";
import Create from "./components/Create";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Blogdetails from "./components/Blogdetails";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navs />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blogs/:id" component={Blogdetails} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={NotFound} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
