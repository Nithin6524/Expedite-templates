
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout.js";
import Home from "./Pages/Home.js";
import "./scss/main.scss";

function App() {
    return (
        <Router>
            <Layout>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<div>Page not found</div>} />
                    </Routes>
                </div>
            </Layout>
        </Router>
    );
}

export default App;
