import React from "react";
import { Link  } from "react-router-dom";
import styles from "../assets/styles/Card.module.css"

export default function Card(props){
    return (
        <li className={styles.card}>
        <Link 
          state={{album: props.album}}
          to={`/album/${props.album.id}`}
        >
          <img
            className={styles.card__img}
            src={`${props.album.cover}`}
            alt={`Cover of ${props.album.album}`}
            loading="lazy"
          />
          <p className={styles.title}>
            <span className={styles.title_album}>{props.album.album_title}</span>
            {props.album.artist}
          </p>
        </Link>
      </li>
    )
}