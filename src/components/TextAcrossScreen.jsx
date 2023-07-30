import React from 'react'
import style from './TextAcrossScreen.module.css'

export default function TextAcrossScreen(props) {
  return (
    <div className={style.container}>
        <span className={style.textAcross}>
          {`${props.text}`}
        </span>
        <span className={style.textAcross}>
          {`${props.text}`}
        </span>
    </div>
  )
}
