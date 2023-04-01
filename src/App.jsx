import { useState } from "react";
import SearchBar from "./components/SearchBar";
//import AlbumCard from "./components/AlbumCard";
import AlbumList from "./components/AlbumList";
import Header from "./components/Header";
import NotFound from "./components/NotFound"

import { Route, Routes, Link } from "react-router-dom";
import AlbumPage from "./components/AlbumPage";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:3003/search-album/" + search)
      .then((response) => response.json())
      .then((data) => setSearchResult(data));
  };

  return (
    <div className="App">
      <Header />
      <SearchBar
          handleChange={handleChange}
          searchValue={search}
          handleSubmit={handleSubmit}
        />
        <AlbumList
          albums={searchResult}
        />
      <Routes>
        <Route path="/" element={<h1>This is the home</h1>}
        />
        <Route
          path="/album/:albumID"
          element={<AlbumPage albums={searchResult}/>}
        />
        <Route
          path="/my-reviews"
          element={<h1>This page is for my reviews</h1>}
        />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
