import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatanBuddy from "./pages/CatanBuddy";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import React from "react";
import Navbar from "./components/Navbar";
import CaseStudies from "./pages/CaseStudies";
import Notion from "./pages/CaseStudies/Notion";
import ResumeLanding from "./pages/ResumeLanding";
import CoolStuff from "./pages/CoolStuff";

function App() {
  return (
    <div className="font-satoshi">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="catan-buddy" element={<CatanBuddy />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/notion" element={<Notion />} />
            <Route path="r" element={<ResumeLanding />} />
            <Route path="cool-stuff" element={<CoolStuff />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
