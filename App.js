import React from "react";
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="main--section">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}