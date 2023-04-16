
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
<Navbar title="TextUtils"/>
{/* <Navbar/> */}
<div className="container my-3">
<TextForm heading="Enter the text to analyze which is written belows"/>
{/* <About/> */}
</div>
    </> 
  );
}

export default App;
