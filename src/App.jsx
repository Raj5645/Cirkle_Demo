import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Header/Home'
import Portfolio from './component/Header/Portfolio'
import Services from './component/Header/Services'
import JoinUs from './component/Header/JoinUs'
import Body from './component/Body/Body'
import ContactUs from './component/Header/ContactUs'
import Layout from './component/Header/Layout'
import EventPage from "./component/Pages/EventPage";
import BillingInvoice from "./component/Pages/BillingInvoice";
import DashBoard from "./component/Pages/DashBoard";
import EventDetail from "./component/Pages/EventDetail";
import LiveAndLoud from "./component/Pages/LiveAndLoud";
import LiveRevenue from "./component/Pages/LiveRevenue";
import Notification from "./component/Pages/Notification";
import Outreach from "./component/Pages/Outreach";
import PublishedEvent from "./component/Pages/PublishedEvent";
import Query from "./component/Pages/Query";
import ServicesEvent from "./component/Pages/ServicesEvent";
import Ticket from "./component/Pages/Ticket";


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
          <Route path="eventpage" element={<EventPage />}>
            <Route index element={<LiveAndLoud />} /> {/* Default page for /eventpage */}
            <Route path="liveandloud" element={<LiveAndLoud />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="eventdetail" element={<EventDetail />} />
            <Route path="liverevenue" element={<LiveRevenue />} />
            <Route path="ticket" element={<Ticket />} />
            <Route path="outreach" element={<Outreach />} />
            <Route path="notification" element={<Notification />} />
            <Route path="publishedevent" element={<PublishedEvent />} />
            <Route path="billinginvoice" element={<BillingInvoice />} />
            <Route path="servicesevent" element={<ServicesEvent />} />
            <Route path="query" element={<Query />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
