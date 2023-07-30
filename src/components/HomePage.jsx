import React from 'react'
import AlbumList from "../components/AlbumList";
import TextAcrossScreen from './TextAcrossScreen';


export default function HomePage(props) {
  return (
    <>
    <TextAcrossScreen
      text={"texto en la pantalla"}
    />
      <h1>This is the home</h1>
      {
        (props.searchResult.length > 0) && (
          <AlbumList
            title={"Results"}
            albums={props.searchResult}
      />
        )
      }
      <AlbumList 
        title={"Billboard charted albums"} 
        albums={props.chartResult} />
    </>
  )
}
