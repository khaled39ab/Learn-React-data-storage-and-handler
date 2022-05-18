import './App.css';
import Cosmetics from './component/Cosmetics/Cosmetics';
import Cosmetic from './component/Cosmetic/Cosmetic';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Cosmetics shop</h1>
      <Cosmetics></Cosmetics>
      {/* <Cosmetic></Cosmetic> */}
    </div>
  );
}

export default App;
