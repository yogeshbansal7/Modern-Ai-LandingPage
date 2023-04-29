import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section} >
    <div className={layout.sectionInfo} >
      <h2 className={styles.heading2} >Find a better <br className='sm:block hidden' /> card deal in few easy steps.</h2>
      <p className={` ${styles.paragraph} max-w-[470px] mt-5 `} >Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button styles="mt-10" /> 
    </div>

    <div className={layout.sectionImg} >
      <img src={card} alt="" className='w-[100%] h-[100%]  ' />

    </div>
    
  </section>
)


export default CardDeal
