import './Work.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { menuLinks } from '../database/db'

function Work() {
  useGSAP(() => {
    gsap.from('.work__client-wrapper', {
      y: '-100%',
      duration: 1,
      ease: 'back',
      stagger: 0.05,
    })
  })
  
  useGSAP(() => {
    gsap.timeline()
    .from('.work__client-wrapper_mobile', {
      // rotate: '110deg',
      x: '-100%',
      duration: 0.5,
      ease: 'none',
      transformOrigin: 'left',
      stagger: 0.05,
    })
    .from('.work__client-link_mobile', {
      rotateX: '90deg',
      duration: 1,
      ease: 'none',
      transformOrigin: 'left',
      stagger: 0.1,
    })
  })


  return (
    <div className='work'>
      {/* ------------------ DESKTOP VERSION -------------------- */}
      <div className='work__header'>
        <h2>WORK</h2>
        <h3>Al Tomizawa - Art Director</h3>
      </div>
      <ul className='work__clients'>
        {menuLinks.map((item, index) => { 
          return (
            <li className='work__client-wrapper' key={index} id={item.id}>
              <div className='work__client-line'></div>
              <a href={item.link} className='work__client-link'>{item.label}</a>
            </li>
          )
        })}
        </ul>

      {/* ------------------ MOBILE VERSION -------------------- */}
      <div className='work__header_mobile'>
        <h2>WORK</h2>
        <h3>Al Tomizawa - Art Director</h3>
      </div>
      <ul className='work__clients_mobile'>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/jbl' className='work__client-link_mobile'>JBL</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href="/work/clients/uncle%20ben's" className='work__client-link_mobile'>UNCLE BEN'S</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/playstation' className='work__client-link_mobile'>PLAYSTATION</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/pennzoil' className='work__client-link_mobile'>PENNZOIL</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/michelob' className='work__client-link_mobile'>MICHELOB</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/rain-x' className='work__client-link_mobile'>RAIN-X</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/playstation%20socom' className='work__client-link_mobile'>PLAYSTATION SOCOM</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/whiskas' className='work__client-link_mobile'>WHISKAS</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/hoover' className='work__client-link_mobile'>HOOVER</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a href='/work/clients/miscellaneous' className='work__client-link_mobile'>MISCELLANEOUS</a>
        </li>
      </ul>
    </div>
  )
}

export default Work
