import { use, useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

let name = "Ramesh Bhai";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Textutility - Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutility is Amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Textutility install now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Textutility - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="Textutility" aboutText="About Us" /> */}
      {/* <Navbar /> */}

      {/* ----------------------- USING REACT ROUTER ----------------------- */}
      <Router>
        <Navbar
          title="Textutility"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> component 1
            /users/home --> component 2 Use exact */}
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Textutils - word counter, character Counter, Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
