import React from "react";
import Modals from '../components/Modals';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({children}) {
    return (
        <div>
            <Modals></Modals>
            <Navbar></Navbar>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout