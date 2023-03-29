import { useState } from "react";
import SearchBar from "./components/SearchBar";
//import AlbumCard from "./components/AlbumCard";
import AlbumList from "./components/AlbumList";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult , setSearchResult] = useState([])

  const handleChange = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
  };
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
    fetch('http://localhost:3003/search-album/' + search )
    .then((response) => response.json())
    .then((data) => setSearchResult(data))
  }

  return (
    <div className="App">
      <header className="header">
        <h1>my react app</h1>
      </header>
      <main className="main">
        <SearchBar
          handleChange={handleChange}
          searchValue={search}
          handleSubmit={handleSubmit}
        />
        <AlbumList
          albums={searchResult}
        />
         {/* <AlbumCard
          albums={searchResult}
         /> */}
        {/* <ul>{renderList(searchResult)}</ul> */}
      </main>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
