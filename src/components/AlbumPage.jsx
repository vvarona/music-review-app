import React from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumPage(props) {
    const { albumID } = useParams() 
    
  return (
    <section>
     
      <h2>{albumID}</h2>

    </section>
  )
}
