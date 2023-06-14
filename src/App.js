import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Main";
import Header from "./Header";
import Product from "./Product";
import NotFound from "./NotFound";

import './App.css';
import Footer from "./Footer";
import LoginForm from "./LoginForm";

const App = () => {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect( () => {
        if ( sessionStorage.getItem("loginStatus") ) {
            setIsLoggedIn(true);
        }
        // Register the 'onbeforeunload' event handler
        document.addEventListener("beforeunload", onBeforeUnload);

        // Return the 'onbeforeunload' event handler so it can be removed later
        return () => document.removeEventListener("beforeunload", onBeforeUnload);
    }, [] );

    const onBeforeUnload = (event) => {
        event.preventDefault();
        // Set the event message
        event.returnValue = "Are you sure you want to leave?";
    };

    const renderMainPage = () => {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/product/:productId" element={<Product />}></Route>
                        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 경우 라우트가 없는 경우 처리 */}
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    };

    return (
        <div>
            { isLoggedIn ? renderMainPage() : <LoginForm /> }
        </div>
    );
};

export default App;