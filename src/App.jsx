import './assets/styles/Normalize.css'
import './assets/styles/App.css'

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import AlbumPage from "./components/AlbumPage";
import ReviewPage from "./components/ReviewPage";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import ButtonRotate from './components/ButtonRotate';

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [chartResult, setChartResult] = useState([]);

  const handleChange = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:3003/search-album/" + search)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setSearchResult(data);
      });
  };

  const fetchChart = () => {
    fetch("http://localhost:3003/chart-billboard")
      .then((response) => response.json())
      .then((data) => setChartResult(data));
  };

  useEffect(() => {
    fetchChart();;
  }, []);

  return (
    <>
      <Header />
      <SearchBar
        handleChange={handleChange}
        searchValue={search}
        handleSubmit={handleSubmit}
      />

      <ButtonRotate
      text={"button"}/>

      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage
              searchResult={searchResult}
              chartResult={chartResult}
            />
          }/>
        <Route
          path="/album/:albumID"
          element={
            <ReviewPage />}
        />
        <Route
          path="/my-reviews"
          element={<h1>This page is for my reviews</h1>}
        />
        <Route 
          path="/album-page" 
          element={<ReviewPage />} />
        <Route 
          path="*" 
          element={<NotFound />} />
      </Routes>


      <footer className="footer">
        <p>footer</p>
      </footer>
    </>
  );
}

export default App;
