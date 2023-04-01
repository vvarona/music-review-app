import React from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumPage(props) {
    const { albumID } = useParams() 
    const album = props.albums.find(album.id === albumID)
  return (
    <div>
      <img src={`${album.cover}`} alt={`Cover of ${album.album_title}`}  />
      <h2>{album.album_title}</h2>
      <h3>by {artist}</h3>
    </div>
  )
}
