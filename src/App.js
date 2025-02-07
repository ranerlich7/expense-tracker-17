import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Auth from "./pages/auth"
import { ExpenseTracker } from "./pages/expense-tracker/index"
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
