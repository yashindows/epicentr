import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./Header/Header"
import Banner from "./Banner/Banner"
import SpecialSuggestions from "./SpecialSuggestions/SpecialSuggestions"
import Actions from "./Actions/Actions"
import Footer from "./Footer/Footer"
import Catalog from "./Catalog/Catalog"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          element={
            <main className="main">
              <Banner />
              <SpecialSuggestions />
              <Actions />
            </main>
          }
          path="/"
        />
        <Route
          element={
            <main className="main">
              <Catalog />
            </main>
          }
          path="/services"
        />
        <Route
          element={
            <main className="main">
              <Catalog />
            </main>
          }
          path="/prices"
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
