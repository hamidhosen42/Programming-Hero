import './App.css';
import Header from './Component/Header/Header';
import Pricing from './Component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-6xl">Welcome to my pricing club</h1>
      <Pricing/>
    </div>
  );
}

export default App;