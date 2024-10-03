import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
{/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />}/>
    </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
