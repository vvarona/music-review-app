import React from "react";
import { useLocation } from 'react-router-dom';
import style from "../assets/styles/ReviewPage.module.css"
import RateSlider from "./RateSlider";

export default function ReviewPage(props) {
  const location = useLocation();
  const album = location.state?.album;

  return (
    <section>
      <RateSlider/>
      <h1 className={style.title}>{`Review of ${album.album_title} by ${album.artist}`}</h1>
      <label className={style.label} htmlFor="review">
          Review
      </label>
      <textarea className={style.textarea} name="review" id="review" rows="10" cols="50"></textarea>
    </section>
  )
}