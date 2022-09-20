import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-3xl bg-teal-300 py-3 mt-10'>Welcome to React Tailwind</h1>
      <Pricing> </Pricing>
    </div>
  );
}

export default App;
