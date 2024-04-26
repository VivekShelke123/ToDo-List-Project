import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='main'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
