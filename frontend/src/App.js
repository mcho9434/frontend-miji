import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatanBuddy from "./pages/CatanBuddy";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoPage from "./pages/NoPage";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CaseStudies from "./pages/CaseStudies";
import Notion from "./pages/CaseStudies/Notion";
import BOCC from "./pages/CaseStudies/BOCC";
import ResumeLanding from "./pages/ResumeLanding";
import CoolStuff from "./pages/CoolStuff";
import Viewport from "./pages/CaseStudies/ThreeFoldViewport";
import YoutubeDataLoader from "./pages/YoutubeDataLoader";
import Up from "./pages/YoutubeDataLoader/Up";
import Down from "./pages/YoutubeDataLoader/Down";
import Essays from "./pages/Essays";
import Essay from "./pages/Essay";

function App() {
    console.log(window.location);

    return (
        <div className="font-satoshi">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="portfolio" element={<Portfolio />} />
                        <Route path="catan-buddy" element={<CatanBuddy />} />
                        <Route path="case-studies" element={<CaseStudies />} />
                        <Route
                            path="case-studies/notion"
                            element={<Notion />}
                        />
                        <Route
                            path="case-studies/three-fold-viewport"
                            element={<Viewport />}
                        />
                        <Route
                            path="case-studies/BOCC"
                            element={<BOCC />}
                        />
                        <Route
                            path="youtube-data-loader"
                            element={<YoutubeDataLoader />}
                        />
                        <Route path="youtube-data-loader/up" element={<Up />} />
                        <Route
                            path="youtube-data-loader/down"
                            element={<Down />}
                        />
                        <Route path="r" element={<ResumeLanding />} />
                        <Route path="cool-stuff" element={<CoolStuff />} />
                        <Route path="/essays" element={<Essays />} />
                        <Route path="/essays/:slug" element={<Essay />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
