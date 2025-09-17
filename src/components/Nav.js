import styles from '../styles/nav.module.css'
import {AiOutlineHome} from 'react-icons/ai'
import {TbBoxMultiple4} from 'react-icons/tb'
import {BsPersonCircle} from 'react-icons/bs'
import {TbStethoscope} from 'react-icons/tb'
import {VscBook} from 'react-icons/vsc'
import {RiContactsFill} from 'react-icons/ri'
import {useState} from 'react'


const Nav = () => {
 
  const [active, setActive] = useState (true);
 

  return (
    <nav className={styles.nav}>
      <a href='#' onClick= {() => setActive ('#')} className={active === '#' ?  styles.active : ''} ><AiOutlineHome/></a>
      <a href='#diff' onClick= {() => setActive ('#diff')} className={active === '#diff' ?  styles.active : ''} ><TbBoxMultiple4/></a>
      <a href='#about' onClick= {() => setActive ('#about')} className={active === '#about' ?  styles.active : ''} ><BsPersonCircle/></a>
      <a href='#treatment' onClick= {() => setActive ('#treatment')} className={active === '#treatment' ?  styles.active : ''} ><TbStethoscope/></a>
      <a href='#testimonials' onClick= {() => setActive ('#testimonials')} className={active === '#testimonials' ?  styles.active : ''} ><VscBook/></a>
      <a href='#contact' onClick= {() => setActive ('#contact')} className={active === '#contact' ?  styles.active : ''} ><RiContactsFill/></a>
   </nav>
  )
}

export default Nav
