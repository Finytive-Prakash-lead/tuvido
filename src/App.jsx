import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayOut from "./layout/MainLayOut";
import Home from "./page/Home";
import ContactSection from "./page/Contact";
import GetQuoteForm from "./page/Pricing";
import Features from "./page/Features";
import About from "./page/About";
import ScrollToTop from "./component/ScrollToTop";
import TermsAndCondition from "./page/TermsAndConditions";
import PrivacyPolicys from "./page/PrivacyPolicy";
import ScrollProgressBar from "./component/progressbar/ScrollProgressBar";
import RefundPolicys from "./page/RefundPolicy";
import NotFound from "./component/NotFound";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgressBar />


      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="pricing" element={<GetQuoteForm />} />
          <Route path="features" element={<Features />} />
          <Route path="about" element={<About />} />
          <Route path="terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="privacy-policy" element={<PrivacyPolicys />} />
          <Route path="refund-policy" element={<RefundPolicys />} />

          {/* 404 Route (always last) */}
          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;