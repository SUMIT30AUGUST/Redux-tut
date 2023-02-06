//import logo from './logo.svg';
import './App.css';
import Home from './containers/HomeContainer';
//import User from './components/Home';
function App() {
  return (
    <div className="App">
      <h1>App Component Sumit Rawat</h1>
      <Home data={{name:"Sumit Singh Rawat", age:76}}/>
    </div>
  );
}

export default App;
