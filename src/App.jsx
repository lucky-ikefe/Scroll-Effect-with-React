import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import useObserverTransition from './useObserverTransition'



export default function App3() {

  const { ref: refBox1, hasTransitioned: hasTransitioned1} = useObserverTransition();
  const { ref: refBox2, hasTransitioned: hasTransitioned2} = useObserverTransition();
  const { ref: refBox3, hasTransitioned: hasTransitioned3} = useObserverTransition();
  const { ref: refBox4, hasTransitioned: hasTransitioned4} = useObserverTransition();


  return (
   <>
    <div className={styles.scrollDown}>Scroll Down</div>
    <div className={`${styles.box} ${hasTransitioned1 ? styles.visible : '' }`} ref={refBox1}></div>
    <div className={styles.scrollDown}>Scroll Down</div>
    <div className={`${styles.box2} ${hasTransitioned2 ? styles.visible2 : '' }`} ref={refBox2}></div>
    <div className={styles.scrollDown}>Scroll Down</div>
    <div className={`${styles.box3} ${hasTransitioned3 ? styles.visible3 : '' }`} ref={refBox3}></div>
    <div className={styles.scrollDown}>Scroll Down</div>
    <div className={`${styles.box4} ${hasTransitioned4 ? styles.visible4 : '' }`} ref={refBox4}></div>
   </>
  )
}
