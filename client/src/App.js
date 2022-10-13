import React from "react";
import { Container } from "@material-ui/core"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Auth from './components/auth/Auth';
import Home from "./components/home/home";

const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={() => <Navigate to="/posts" />} />
          <Route path="/posts" element={<Home/>} />
          {/*<Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} /> */}
          <Route path="/auth" element={!user ? <Auth/> : <Navigate to="/posts" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
