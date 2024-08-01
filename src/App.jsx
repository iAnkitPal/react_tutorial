import "./App.css";
import Footer from "./Shared/Components/Footer";
import Header from "./Shared/Components/Header";
import {Outlet} from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
