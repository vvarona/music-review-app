import React from 'react'
import style from './ButtonRotate.module.css'

export default function ButtonRotate(props) {
  
  window.addEventListener('scroll', ()=> {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight))
  })

    return (
    <>
      <button className={style.button}> {props.text} </button>
    </>
  )
}
