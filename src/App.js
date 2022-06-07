import Landing from './pages/Landing';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import registerTeam from './pages/registerTeam';

function App() {
  return (
    <BrowserRouter className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="registerTeam" element={<registerTeam />} />
                {/*<Route path="invoices" element={<Invoices />} />*/}
            </Routes>
            
        </BrowserRouter>
  );
}

export default App;
