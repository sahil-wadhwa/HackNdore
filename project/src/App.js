import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import PharmacySection from './sections/Healthcare/PharmacySection';
import WarehouseSection from './sections/Healthcare/WarehouseSection';
import CurrentTSection from './sections/Tenders/CurrenTSection';
import GenerateTSection from './sections/Tenders/GenerateTSection';
import UpcomingTSection from './sections/Tenders/UpcomingTSection';
import HospitalSection from './sections/Healthcare/HospitalSection';
import SupplySection from './sections/Water/SupplySection';
import RequestSection from './sections/Water/RequestSection';
import LeakageSection from './sections/Water/LeakageSection';
import RoadSection from './sections/Transport/RoadSection';
import VansSection from './sections/Transport/VansSection';
import BusesSection from './sections/Transport/BusesSection';
import Data from './components/DataGrid';
import ChartsOverviewDemo from './components/Charts';
import InfiniteCarousel from './components/Carousel';

function App() {
  const [user, setLoginUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:9002/protected', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        setLoginUser(res.data);
      })
      .catch(err => {
        console.error("Error verifying token:", err);
        localStorage.removeItem('token');
        setLoginUser(null);
      });
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={user ? <HomePage setLoginUser={setLoginUser} /> : <LoginPage setLoginUser={setLoginUser} />} />
      <Route path="/login" element={<LoginPage setLoginUser={setLoginUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/supplies/agencies" element={<HospitalSection />} />
      <Route path="/supplies/retailers" element={<PharmacySection />} />
      <Route path="/supplies  /warehouses" element={<WarehouseSection />} />
      <Route path="/tenders/current tenders" element={<CurrentTSection />} />
      <Route path="/tenders/generate tenders" element={<GenerateTSection />} />
      <Route path="/tenders/upcoming tenders" element={<UpcomingTSection />} />
      <Route path="/transport/city vans" element={<VansSection />} />
      <Route path="/transport/road" element={<RoadSection />} />
      <Route path="/transport/buses" element={<BusesSection />} />
      <Route path="/water/leakages" element={<LeakageSection />} />
      <Route path="/water/requests" element={<RequestSection />} />
      <Route path="/water/supply" element={<SupplySection />} />
      <Route path="/data" element={<Data />} />
      <Route path="/charts" element={<InfiniteCarousel />} />
    </Routes>
  );
}

export default App;