import './App.css';
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home"

function App() {
  return (
    <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <Navbar/>
      <Home/>

    </div>
  );
}

export default App;
