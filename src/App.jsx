import './scss/style.scss';
import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getQrHistoryStorage } from './components/QrSlice';

import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './Utils/ScrollToTop';

import HomePage from './pages/HomePage';
import AllQrPage from './pages/AllQrPage';
import GetQrPage from './pages/GetQrPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQrHistoryStorage());
  }, []);

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RalewayRegular bg-homeBg">
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Header />
        <Suspense
          fallback={
            <div className="loading-gif">
              <img src="image/loading.gif" alt="Loading..." />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/allSaveQr" element={<AllQrPage />} />
            <Route path="/getQr" element={<GetQrPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
