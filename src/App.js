// import logo from './logo.svg';
import './App.css';
import UploadImage from './components/UploadImage'
import RenderedAvatar from './components/RenderedAvatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Upload your photo to generate an amazing Avatar
      <RenderedAvatar/>
        <UploadImage/>
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
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
