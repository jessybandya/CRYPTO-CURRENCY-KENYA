import React, { Suspense } from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Nopage from "./components/Nopage"
import { makeStyles } from "@material-ui/core";
import "./App.css";
//import Banner from "./components/Banner/Banner";
import Header from "./components/Header";
//import Banner from "./components/Banner/Banner";
/* import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage"; */
import Alert from "./components/Alert";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
}));
function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.App}>
    <Suspense fallback={<div className="center"> {LoadingSpinner} </div>}>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="*" element={<Nopage/>}/>
  </Routes>
    </Router>
    </Suspense>
    </div>
    </React.Fragment>
  );
}

export default App;
