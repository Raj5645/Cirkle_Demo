import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Header/Home'
import Portfolio from './component/Header/Portfolio'
import Services from './component/Header/Services'
import JoinUs from './component/Header/JoinUs'
import Body from './component/Body/Body'
import ContactUs from './component/Header/ContactUs'
import Layout from './component/Header/Layout'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="joinus" element={<JoinUs />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);