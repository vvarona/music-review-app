import React from "react";

const mockAlbum = {
  id: "16149860",
  readable: true,
  title: "Summertime Sadness",
  title_short: "Summertime Sadness",
  title_version: "",
  link: "https://www.deezer.com/track/16149860",
  duration: "264",
  rank: "840889",
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview:
    "https://cdns-preview-2.dzcdn.net/stream/c-2b8dc737bc83c94d673885bc0536ec2b-6.mp3",
  md5_image: "4c2c6143c3e83a01ea73517c57d1d138",
  artist: {
    id: "1424821",
    name: "Lana Del Rey",
    link: "https://www.deezer.com/artist/1424821",
    picture: "https://api.deezer.com/artist/1424821/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/8994d3be1a59a72f887f1f8afd2d4c6c/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/8994d3be1a59a72f887f1f8afd2d4c6c/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/8994d3be1a59a72f887f1f8afd2d4c6c/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/8994d3be1a59a72f887f1f8afd2d4c6c/1000x1000-000000-80-0-0.jpg",
    tracklist: "https://api.deezer.com/artist/1424821/top?limit=50",
    type: "artist",
  },
  album: {
    id: "1503218",
    title: "Born To Die",
    cover: "https://api.deezer.com/album/1503218/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/4c2c6143c3e83a01ea73517c57d1d138/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/4c2c6143c3e83a01ea73517c57d1d138/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/4c2c6143c3e83a01ea73517c57d1d138/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/4c2c6143c3e83a01ea73517c57d1d138/1000x1000-000000-80-0-0.jpg",
    md5_image: "4c2c6143c3e83a01ea73517c57d1d138",
    tracklist: "https://api.deezer.com/album/1503218/tracks",
    type: "album",
  },
  type: "track",
};

export default function AlbumCard(prop) {
  return (
    <div className="albumCard_conteiner">
      <img
        src="https://api.deezer.com/album/1503218/image"
        alt="album cover"
        title="album cover"
        className="albumCard_img"
      />
      <h2 className="albumCard_title">{mockAlbum.title}</h2>
      <p className="albumCard_artist">{mockAlbum.artist.name}</p>
    </div>
  );
}
