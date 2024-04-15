import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./Header/Header"
import Banner from "./Banner/Banner"
import SpecialSuggestions from "./SpecialSuggestions/SpecialSuggestions"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Banner />
              <SpecialSuggestions />
            </>
          }
          path="/"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
