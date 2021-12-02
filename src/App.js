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
import Details  from "./components/Details";
import { Favouritelist } from "./components/Favouritelist";

function App() {
  return (
    <GlobalProvider>
          <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={ <Home />}></Route>
        <Route  path="/details/:id" element={ <Details />}></Route>
          <Route  path="/watchlist" element={ <Watchlist />}></Route>
          <Route path="/add" element={  <Add />}> </Route>
          <Route path="/watched"element={  <Watched />}></Route>
          <Route path="/favourites"element={  <Favouritelist />}></Route>

        </Routes>
      </Router>
    </GlobalProvider>
  
 
  );
}

export default App;
