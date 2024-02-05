import Navbar from './Navbar';
import Home from "./Home"

function App() {
  // const title = "Welcome to the new blog";
  // const likes = "15";
  // const person = {name: "Ismail", age: 30}
  return (
    <div className="App">
       <Navbar />
      <div className="content">
        <Home />
        {/* <p>Liked {likes} times</p> */}
        {/* <p>{person.name}</p> */}
      </div>
     
    </div>
  );
}

export default App;
