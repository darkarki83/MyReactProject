import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Technologies />
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div className="Header">
      <div>Simple HTML Header</div>
      <div>
        <ul>
          <li><a href='#' >css 2</a></li>
          <li><a href='#' >html 2</a></li>
          <li><a href='#' >js 2</a></li>
          <li><a href='#' >react 2</a></li>
        </ul>
      </div>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="Technologies">
      <div>Simple HTML</div>
      <div>
        <ul>
          <li>css</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
    </div>
  );
}



export default App;
