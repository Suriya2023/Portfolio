import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from './Component/MERNStackAcademy'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>


    </>
  )
}

export default App
