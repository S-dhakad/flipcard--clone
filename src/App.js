import Main from "./Components/flipcardhomepages/Main.jsx"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Userproductview from "./Components/flipcardhomepages/Userproductview.jsx";
import Addres from "./FlipcardPayment/Addressinformation/Addres.jsx";
import Cardinformation from "./FlipcardPayment/Cardinformation.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Card from "./Components/flipcardhomepages/Card.jsx";
import OTP from "./Components/flipcardhomepages/OTP.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Userproductview" element={<Userproductview />} />
          <Route path="/Addres" element={<Addres />} />
          <Route path="/Payment" element={<Cardinformation />} />
          <Route path="/OTP" element={<OTP />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
