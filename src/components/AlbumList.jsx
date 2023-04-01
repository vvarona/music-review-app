import React from "react";
import { Link } from "react-router-dom";


export default function AlbumList(props) {
  const searchResult = props.albums;
  const renderList = searchResult.map((album) => {
    console.log(album.data);
    return (
      <li key={album.id}>
        <Link to={`/album/${album.id}`}>
          <img src={`${album.cover}`} alt={`Cover of ${album.album}`}  loading="lazy"/>
          <h3>{album.track_title}</h3>
          <p>in {album.album_title} by {album.artist}</p>
        </Link>
      </li>
    );
  });

  return <ul>{renderList}</ul>;
}
