import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './view/homepage/homepage';

function AppRoutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoutes