import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react";
import styled from "styled-components"

import { UserContext } from "./context/UserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Product from "./pages/Product"

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <UserContext.Provider >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Product />} />
          </Routes>
        </UserContext.Provider >
      </BrowserRouter >
    </PagesContainer >
  )
}

const PagesContainer = styled.main`
  width: 100vw;
  height: 100vw;
`