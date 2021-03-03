import "./Styles/App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SearchPage from "./Components/SearchPage";
import Upload from "./Components/Upload";
import RecommendedVideos from "./Components/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/upload">
            <div className="upload_page">
              <Sidebar />

              <Upload />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
