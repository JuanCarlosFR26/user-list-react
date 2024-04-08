import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home } from "./pages/Home";
import UsersDataProvider from "./context/UsersDataProvider";
import Users from "./pages/Users";


function App() {
  return (
    <div>
      <BrowserRouter>
        <UsersDataProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/users" element={<Users />}></Route>
            </Route>
          </Routes>
        </UsersDataProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
