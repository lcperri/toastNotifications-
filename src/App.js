import { Child } from "./Child";
import image from '../src/assets/wallpaper.png'
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1> Hello from App component </h1>
      <Child />
      <img src={image}></img>
    </div>
  );
}

export default App;