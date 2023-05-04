// import logo from './logo.svg';
import './App.css';
import UploadImage from './components/UploadImage'
import RenderedAvatar from './components/RenderedAvatar';
import './components/RenderedAvatar/utils'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {true ? <RenderedAvatar /> : <div>
          Upload your photo to generate an amazing Avatar



          <UploadImage />
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
          </a></div>}
      </header>
    </div>
  );
}

export default App;
