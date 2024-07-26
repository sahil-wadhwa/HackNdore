import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App flex flex-col">
      <div className='fixed top-0'><Navbar/></div>
      
      <div className='align-bottom fixed bottom-0'><Footer/></div>
      
    </div>
  );
}

export default App;
