import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="NoaKhali" special="bivag"></District>
      <District name="Bramonbaria" special="joda akbar"></District>
      <District name="Sumilla" special="Moyna and moti"></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}

function Post(props) {
  const { title, body, userId, id } = props.post;
  const [power, setPower] = useState(1);
  
  const boostPower = () => setPower(power * 2);

  return (
    <div
      style={{
        backgroundColor: "green",
        margin: "20px",
        borderRadius: "20px",
        border: "3px solid red",
        padding: "20px",
      }}
    >
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
      <h4>
        UserID: {userId} & ID: {id}
      </h4>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "green",
  margin: "20px",
  borderRadius: "20px",
  border: "3px solid red",
  padding: "20px",
};

function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => setPower(power * 2);

  return (
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty:{props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

export default App;