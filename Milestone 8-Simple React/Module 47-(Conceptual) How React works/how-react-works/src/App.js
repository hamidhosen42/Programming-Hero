import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App" style={{ border: "2px solid green", margin: "5px" }}>
      <Device name="Hamid Hosen" id="191002012"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;