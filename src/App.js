import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home/index"
import AddUser from './components/Add';


function App() {
    return ( 
        <div className = 'App' >
        <Header />
            <Router>
                <Routes>
                    <Route path = '/Home' element = { <Home /> } > </Route>  
                    <Route path='/AddUser' element={<AddUser />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;