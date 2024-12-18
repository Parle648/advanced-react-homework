import UsersPage from "../pages/UsersPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { appStateStore } from "./store"
import UserDetailsPage from "../pages/UserDetailsPage"
import Home from "../pages/Home"
import Header from "../widgets/Header"
import { DarkModeProvider } from "./contexts/dark-mode-context"

export function App() {
  return (
    <Provider store={appStateStore}>
      <DarkModeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<UsersPage />}></Route>
            <Route path="/users/:id" element={<UserDetailsPage />}></Route>
            <Route path="*" element={"404 Not found page"} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </Provider>
  )
}
