import styles from '../styles/footer.module.css'
import {HiOutlineMail} from 'react-icons/hi'
import Link from 'next/link'



const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.col1}>
        <span className={styles.span}> Designed by:   <u><a href='www.mospor.com'>mospor.com</a></u>  </span>
      </div>

      <div className={styles.col2}>
      <span className={styles.span}> For Inquiry: <Link href="mailto:zaini.affi@gmail.com" target="_blank" legacyBehavior><a className={styles.mail}><HiOutlineMail/></a></Link></span>
      </div>

    </div>
  )
}

export default Footer