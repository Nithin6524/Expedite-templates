import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../scss/layouts/layout.scss";

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
