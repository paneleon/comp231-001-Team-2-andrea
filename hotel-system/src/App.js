import Home from './Home';
import ContactUs from './ContactUs';
import ViewRooms from './ViewRooms';
import MyProfile from './MyProfile';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Payment from './Payment';
import Confirmation from './Confirmation';
import BookRoom from './BookRoom';

function App() { 
  return (
    <>
      <Router>
         <Routes>
          <Route index element= {<Home/>}/>
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/view-rooms" element={<ViewRooms/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
          <Route path="/book-room" element={<BookRoom/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
