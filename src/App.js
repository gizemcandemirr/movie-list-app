import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
          <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={ <Home />}></Route>
          <Route  path="/watchlist" element={ <Watchlist />}></Route>
          <Route path="/add" element={  <Add />}> </Route>
          <Route path="/watched"element={  <Watched />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  
 
  );
}

export default App;
