import styles from '../styles/nav3.module.css'
import {GoMegaphone} from 'react-icons/go'
import { useState } from 'react'
import {RiWhatsappFill} from 'react-icons/ri'
import {IoIosCall} from 'react-icons/io'
import {ImMail4} from 'react-icons/im'
import {FaFacebook} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Nav3 = () => {
  const [active, setActive] = useState (true);
 
  
  return (
   
  <div> 
    <nav className={styles.nav3}> 
      <motion.div onClick= {() => setActive(!active) } 
      initial= {{opacity: 0.35}}
      animate= {{opacity: 1}}
      transition= {{type: 'spring', type: 'tween', duration:1, repeat: Infinity, repeatType: 'reverse' }}>
       {/* <a><GoMegaphone className={active ?  styles.activeCall : styles.call} />
        </a> */}
        <a  className={active ?  styles.activeCall : styles.call} >Call Us Now
        </a>
      </motion.div>       
   </nav> 
    <div className={active ? styles.activeCallBar : styles.callBar}>   
      <div className={styles.col1}> 
        <p className={styles.p}>Dr. Asma</p> 
        <div className={styles.icons}>
          <a  href="https://api.whatsapp.com/send?phone=923329622164" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> <RiWhatsappFill /> </a>
          <a href="tel: +923329622164" className={styles.phone}><IoIosCall/></a>
        </div>        
      </div>
      
      <div className={styles.col2}>
       <p className={styles.p}>Dr. Asad</p> 
          <div className={styles.icons}>
            <a  href="https://api.whatsapp.com/send?phone=923125122488" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> <RiWhatsappFill /> </a>
            <a href="tel: +923125122488" className={styles.phone}><IoIosCall/></a>
          </div> 
      </div> 

     {/* <div className={styles.col3}> 
        <div className={styles.icons}>
          <a  href="mailto:ask2cure@gmail.com" target= "_blank" rel="noopener noreferrer" className={styles.mail}> <ImMail4 /> </a>
          <a  href="https://m.me/Arshad.H.Clinic" target= "_blank" rel="noopener noreferrer" className={styles.fb}> <FaFacebook /> </a>
        </div>        
      </div> */}

    </div>

  </div>
 )
}

export default Nav3
