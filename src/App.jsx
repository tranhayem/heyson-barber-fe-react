import Box from "@mui/material/Box";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import PriceList from "./pages/priceList/PriceList";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import NotFound from "./pages/NotFound";

function App() {
  const renderPage = (Component) => (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          mt: (theme) => theme.heySonCustom.appBarHeight,
          minHeight: (theme) => theme.heySonCustom.mainHeight,
        }}
      >
        <Component />
      </Box>
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderPage(Home)} />
        <Route path="/products" element={renderPage(Products)} />
        <Route path="/services" element={renderPage(Services)} />
        <Route path="/price-list" element={renderPage(PriceList)} />

        <Route path="*" element={renderPage(NotFound)} />
      </Routes>
    </Router>
  );
}

export default App;
