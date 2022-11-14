import SigninForm from "./components/signinform/Signinform";
// import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchbar from "./components/searchbar/searchbar";

export const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <div>Not having Access</div>;
  }
  return children;
};
// export const context = createContext();

function App() {
  // const[authorize,setAuthorize]=useState(false);

  localStorage.setItem("authorize", false);
  let authorize = localStorage.getItem("authorize");

  return (
    <div className="App">
      {/* <context.Provider value={{authorize,setAuthorize}}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route
            path="/*"
            element={<ProtectedRoute isAuthenticated={false} />}
          />
          <Route
            path="/user/:userId"
            element={
              <ProtectedRoute isAuthenticated={authorize}>
                <Searchbar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* </context.Provider>  */}
    </div>
  );
}

export default App;
