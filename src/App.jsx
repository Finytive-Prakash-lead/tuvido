// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import TuvidoApp from './pages/Tuvidoapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import MainLayOut from './components/MainLayOut'
import Home from './pages/Tuvidoapp'
import TermsAndConditions from './pages/Terms'
import PrivacyPolicy from './pages/Privacy'
// import Contact from './pages/Contact'
import ScrollToTop from './pages/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Layout Routes */}
        {/* <Route path="/" element={<MainLayOut />}> */}
          <Route index element={<Home />} />
          {/* <Route path="contact-us" element={<Contact />} /> */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        {/* </Route> */}

        {/* Not Found — outside MainLayOut */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
