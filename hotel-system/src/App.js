import Home from './Home';
import {BrowserRouter  as Router, Routes, Route, Link} from 'react-router-dom';

function App() { 
  return (
    <>
      <Router>
         <Routes>
          <Route index element= {<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
