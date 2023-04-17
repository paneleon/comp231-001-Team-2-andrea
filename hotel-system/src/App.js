import Home from './Screens/Home/Home';
import ContactUs from './Screens/ContactUs/ContactUs';
import ViewRooms from './Screens/ViewRooms/ViewRooms';
import MyProfile from './Screens/MyProfile/MyProfile';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Payment from './Screens/Payment/Payment';
import BookRoom from './Screens/BookRoom/BookRoom';
import 'antd/dist/reset.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() { 
  return (
    <>
      <Router>
         <Routes>
          <Route index element= {<Home/>}/>
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/view-rooms" element={<ViewRooms/>} />
          <Route path="/rooms/:id/:checkInDate/:checkOutDate" element={<BookRoom/>}/>
          <Route path="/payment" element={<Payment/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
