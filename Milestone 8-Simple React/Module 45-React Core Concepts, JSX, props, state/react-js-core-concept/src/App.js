import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singers = { name: "Dr. Mahfuz", job: "Singer" };
const singers1 = { name: "Eva Rahman", job: "Singer2" };

const singer = [
  { name: "Dr. Mahfuz", job: "Singer" },
  { name: "Eva Rahman", job: "Singer2" },
  { name: "Agun", job: "sopno" },
  { name: "shuvro", job: "pathor" },
];

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};
const nayoks = [
  "Rubel",
  "BappaDa",
  "Kuber",
  "Jashim",
  "Salman Shah",
  "Riyaz",
  "Anwar",
];
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Hamid Hosen Azad</h3>
        </div>

        <div className="music"></div>
        
        <p>Name:{333+number}</p>
        <p style={singerStyle}>Name:{singers.name} {singers.job}</p>
        <p style={{color:'blue',backgroundColor:'yellow'}}>Name:{singers1.name} {singers1.job}</p>
      </header> */}

      {/* --------------------------- */}
      {/* <Person name="Hamid Hosen Azad" age="21"></Person>
      <Person name="Fahim Hosen" age="22"></Person>
      <Person name="Sakib Khan" age="32"></Person>
      <Person></Person> */}

      {nayoks.map((name) => (
        <li>Name: {name}</li>
      ))}

      {/* {nayoks.map((name) => (
        <Person name={name}></Person>
      ))} */}

      {singer.map((name) => (
        <Person name={name.name} job={name.job}></Person>
      ))}

      {/* <Person name={nayoks[0]} age="21"></Person>
      <Person name={nayoks[1]} age="22"></Person>
      <Person name={nayoks[2]} age="32"></Person>
      <Person name={nayoks[3]}></Person> */}

      <h5>New Component. YAY</h5>
      <p id="totocompany">rock mama React mama.</p>

      <Friend movie="Shingam" phone="01777"></Friend>
      <Friend phone="01999"></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age: {props.job}</p>
      {/* <p>Age: {props.age}</p> */}
    </div>
  );
}

function Friend(props) {
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone ? props.phone : "Empty"}</p>
    </div>
  );
}

export default App;