import React from "react";
import Navbar from "./components/Navbar";
import "./components/FontAwesomeIcons";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import posts from "./data/posts";
import CenteredButton from "./components/CenteredButton";
import Institutional from "./components/Institutional";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton> Abra sua conta</CenteredButton>
    <Institutional />
    <Faq />
    <Footer />
  </div>
);

export default App;
