import { TfiYoutube } from "react-icons/tfi";
import { MdContacts } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import styles from '../styles/cta.module.css';


const CTA = () => {
    return (
        <div className={styles.flexGroup}>
          <a href="https://www.youtube.com/c/ArshadHomeopathicClinicOfficial" className="social-icon social-icon--youtube" target='_blank' rel="noopener noreferrer"><TfiYoutube /></a>
          <a href="https://www.facebook.com/Arshad.H.Clinic?mibextid=ZbWKwL" className="social-icon social-icon--facebook" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
          <a href="https://www.instagram.com/arshadhc.official/?hl=en" className="social-icon social-icon--instagram" target='_blank' rel="noopener noreferrer"><RiInstagramFill /></a>
          <a href="https://www.tiktok.com/@arshadhomeoclinic" className="social-icon social-icon--tiktok" target='_blank' rel="noopener noreferrer"><FaTiktok /></a>
          <a href="#contact" className="social-icon social-icon--contact" ><MdContacts /></a>
        </div>
      
      
      
    )
  }
  
  export default CTA