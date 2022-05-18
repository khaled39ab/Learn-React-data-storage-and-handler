import './App.css';
import Cosmetics from './component/Cosmetics/Cosmetics';
import Shoes from './component/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Cosmetics shop</h1>
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
