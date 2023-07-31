import React, { useEffect, useState } from "react";
import { mockAlbum as album } from "../assets/AlbumModel";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AlbumPage(props) {
  const { albumID } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3003/album/" + albumID)
      .then((response) => setData(response.data.album))
  }, [albumID]);

  return (
    <section>
      
    </section>
  );
}
