import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import ExpenseTracker from "./pages/expense-tracker"
import Auth from "./pages/auth"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" exact element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
