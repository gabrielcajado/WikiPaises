import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Detail from './pages/Detail.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/country/:code" element={<Detail />} />
    </Routes>
  </BrowserRouter>
)
