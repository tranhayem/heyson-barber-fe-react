import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AdminHeader from "./components/admin/header/AdminHeader";
import Footer from "./components/customer/footer/Footer";
import Header from "./components/customer/header/Header";

import AboutManagement from "./pages/admin/about/AboutManagement";
import BannerManagement from "./pages/admin/banner/BannerManagement";
import ContactManagement from "./pages/admin/contact/ContactManagement";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Login from "./pages/admin/login/Login";
import ProductManagement from "./pages/admin/products/ProductManagement";
import ProductTypeManagement from "./pages/admin/products/ProductTypeManagement";
import ServiceManagement from "./pages/admin/services/ServiceManagement";
import ServiceTypeManagement from "./pages/admin/services/ServiceTypeManagement";
import StaffManagement from "./pages/admin/staff/StaffManagement";

import Home from "./pages/customer/home/Home";
import Products from "./pages/customer/products/Products";
import Services from "./pages/customer/services/Services";
import NotFound from "./pages/NotFound";
import { Box } from "@mui/material";

function App() {
  const [loggedIn] = useState(false);

  const renderPage = (Component, isAdmin = false) => {
    return isAdmin ? (
      loggedIn ? (
        <>
          <AdminHeader />
          <Component />
        </>
      ) : (
        <Navigate to="/admin/login" />
      )
    ) : (
      <>
        <Header />
        <Box component="main">
          <Component />
        </Box>
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderPage(Home)} />
        <Route path="/products" element={renderPage(Products)} />
        <Route path="/services" element={renderPage(Services)} />

        <Route
          path="/admin/login"
          element={loggedIn ? <Navigate to="/admin" /> : <Login />}
        />
        <Route path="/admin" element={renderPage(Dashboard, true)} />
        <Route
          path="/admin/about-management"
          element={renderPage(AboutManagement, true)}
        />
        <Route
          path="/admin/banner-management"
          element={renderPage(BannerManagement, true)}
        />
        <Route
          path="/admin/contact-management"
          element={renderPage(ContactManagement, true)}
        />
        <Route
          path="/admin/product-management"
          element={renderPage(ProductManagement, true)}
        />
        <Route
          path="/admin/product-type-management"
          element={renderPage(ProductTypeManagement, true)}
        />
        <Route
          path="/admin/service-management"
          element={renderPage(ServiceManagement, true)}
        />
        <Route
          path="/admin/service-type-management"
          element={renderPage(ServiceTypeManagement, true)}
        />
        <Route
          path="/admin/staff-management"
          element={renderPage(StaffManagement, true)}
        />

        <Route path="*" element={renderPage(NotFound)} />
      </Routes>
    </Router>
  );
}

export default App;
