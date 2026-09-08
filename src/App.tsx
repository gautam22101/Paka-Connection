import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import WebDevelopment from './pages/WebDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import ERP from './pages/ERP';
import SalesOrder from './pages/SalesOrder';
import ProductionOrder from './pages/ProductionOrder';
import InventoryMaterialPlanning from './pages/InventoryMaterialPlanning';
import FoodIndustry from './pages/FoodIndustry';
import MNCs from './pages/MNCs';
import Healthcare from './pages/Healthcare';
import Manufacturing from './pages/Manufacturing';
import Lifestyle from './pages/Lifestyle';
import Reviews from './pages/Reviews';
import GetInTouch from './pages/GetInTouch';
import Blog from './pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/what-we-do/web-development" element={<WebDevelopment />} />
          <Route path="/what-we-do/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/what-we-do/erp" element={<ERP />} />
          <Route path="/what-we-do/erp/sales-order" element={<SalesOrder />} />
          <Route path="/what-we-do/erp/production-order" element={<ProductionOrder />} />
          <Route path="/what-we-do/erp/inventory-material-planning" element={<InventoryMaterialPlanning />} />
          <Route path="/industries/food" element={<FoodIndustry />} />
          <Route path="/industries/mncs" element={<MNCs />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/lifestyle" element={<Lifestyle />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
