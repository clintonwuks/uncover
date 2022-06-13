import Landing from './pages/Landing';
import RegisterTeam from './pages/RegisterTeam';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="RegisterTeam" element={<RegisterTeam/>} />
                {/*<Route path="invoices" element={<Invoices />} />*/}
            </Routes>
            
        </BrowserRouter>
  );
}

export default App;
