import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
import Footer from "../Footer";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRommanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
