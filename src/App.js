import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import RecommendedVideos from './Components/RecommendedVideos'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_page">
      <Sidebar/>
      <RecommendedVideos/>
      </div>
      
    </div>
  );
}

export default App;
