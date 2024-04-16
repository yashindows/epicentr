import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./Header/Header"
import Banner from "./Banner/Banner"
import SpecialSuggestions from "./SpecialSuggestions/SpecialSuggestions"
import Actions from "./Actions/Actions"
import Footer from "./Footer/Footer"
import Test from "./Test/Test"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          element={
            <>
              <Banner />
              <SpecialSuggestions />
              <Actions />
            </>
          }
          path="/"
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
