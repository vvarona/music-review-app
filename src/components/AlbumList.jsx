import React from "react";
import styles from "../assets/styles/AlbumList.module.css";
import Card from "./Card";

export default function AlbumList(props) {
  const renderList = props.albums.map((album) => {
    return (
      <Card
        album={album}
        key={album.id}
      />
    );
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {`${props.albums.length} ${props.title}`}
      </h2>
      <ul className={styles.list}>{renderList}</ul>
    </section>
  );
}
