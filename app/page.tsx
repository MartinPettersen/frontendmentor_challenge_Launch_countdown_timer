import React from "react";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import FrontendMentor from "./components/FrontendMentor";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center  justify-between">
    <FrontendMentor />
    <Container />
    <Footer />
  </main>
);

export default Home;
