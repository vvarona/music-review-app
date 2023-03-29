import React from "react";

export default function AlbumList(props) {
  const searchResult = props.albums;
  const searchOnlyAlbums = searchResult.filter((element => {
    const result = []
    if (result.filter) {

    }
    return searchOnlyAlbums
  }));
  const renderList = searchResult.map((album) => {
    console.log(album.data);
    return (
      <li key={album.id}>
        <img src={`${album.cover}`} alt={`Cover of ${album.album}`}  loading="lazy"/>
        <h3>{album.album}</h3>
        <p>by {album.artist}</p>
      </li>
    );
  });

  return <ul>{renderList}</ul>;
}
