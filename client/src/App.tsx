import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Listing } from "./pages/Listing";
import { Form } from "./pages/Form";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Listing />} path="/" />
        <Route path="/form">
          <Route element={<Form />} path=":movieId" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
