// import logo from './logo.svg';
import './App.css';
import UploadImageCanva from './components/UploadImageCanva'
import './components/RenderedAvatar/utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UploadImageCanva />
        <p>
        </p>
        Learn more about how this work
        <a
          className="App-link"
          href="https://docs.unionavatars.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Union Avatars API
        </a>
      </header>
    </div>
  );
}

export default App;
