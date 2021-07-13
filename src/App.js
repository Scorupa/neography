import './App.css';
import GithubCorner from 'react-github-corner';
import Generator from './Generator';

function App() {
  return (
    <div className="App">
      <GithubCorner
        href={"https://github.com/Scorupa/neography"}
        bannerColor="#C44A41"
        octoColor="#fff"
        size={80}
        direction="left"
      />
      <Generator />
    </div>
  );
}

export default App;
