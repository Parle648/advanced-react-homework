import UsersPage from "../pages/UsersPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { appStateStore } from "./store"
import UserDetailsPage from "../pages/UserDetailsPage"
import Home from "../pages/Home"
import Header from "../widgets/Header"

function App() {
  return (
    <Provider store={appStateStore}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
          <Route path="/users/:id" element={<UserDetailsPage />}></Route>
          <Route path="*" element={"404 Not found page"} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
