import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Row from "./Components/Row";
import requests from "./Requests";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import { AuthContextProvider } from "./Context/AuthContext";
import Signin from "./Components/Signin";
import Account from "./Components/Account";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />{" "}
                <Row
                  title={"Trending"}
                  fetchURL={requests.requestTrending}
                  rowId={1}
                />
                <Row
                  title={"Top Rated"}
                  fetchURL={requests.requestTopRated}
                  rowId={2}
                />{" "}
                <Row
                  title={"Horror"}
                  fetchURL={requests.requestComedy}
                  rowId={3}
                />
              </>
            }
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* <SignUp /> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
