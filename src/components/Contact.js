"use client"; // ← Add this line

import styles from '../styles/contact.module.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {ImYoutube} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {RiWhatsappFill} from 'react-icons/ri'
import { FaPhoneSquareAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
import { FaTiktok } from "react-icons/fa";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yygywko', 'template_5tgy9jr', form.current, 'xuSwhz7uEOzc-vbDU')
    e.target.reset()
  };

  return (
    <section className={styles.section}>
      <div id='contact' className={styles.container} >
        <h3 className={styles.h03}>How To</h3>
        <h2 className={styles.h02}>Contact Us</h2>
        <div className={styles.columns}>         
          <div> 
            <div className={styles.blocks}>
              <div className={styles.block1}>
                <h3 className={styles.h02}>Timings</h3>
                <div className={styles.col3}>
                 <div>
                    <div  className={styles.title}>
                      <p className={styles.p}><b>Dr. Mrs Asma Arshad </b></p>
                      <motion.div className={styles.icons}
                      initial= {{opacity: 0.25}}
                      animate= {{opacity: 1}}
                      transition= {{type: 'spring', type: 'tween', duration:1.25, repeat: Infinity, repeatType: 'reverse' }}>
                        <a  href="https://wa.me/923329622164" id="whatsApp-dr-asma" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> <RiWhatsappFill /> </a>
                        <a href="tel: +923329622164" id="phone-dr-asma" target= "_blank" rel="noopener noreferrer" className={styles.phone}><FaPhoneSquareAlt /></a>
                      </motion.div>
                      <a href="tel: +923329622164" id="phone-dr-asma" target= "_blank" rel="noopener noreferrer" className={styles.p1}>0332-9622164</a> 
                    </div>
                    <div className={styles.block2}>
                      <span>11:00am - 02:00pm <br/> 05:00pm - 09:00pm</span>
                    </div>

                    <div  className={styles.title}>
                      <p className={styles.p}><b>Dr. M Asad Awan</b></p>
                      <motion.div className={styles.icons}
                      initial= {{opacity: 0.25}}
                      animate= {{opacity: 1}}
                      transition= {{type: 'spring', type: 'tween', duration:1.27, repeat: Infinity, repeatType: 'reverse' }}>
                       <a  href="https://wa.me/923125122488" id="whatsApp-dr-asad" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> <RiWhatsappFill /> </a>
                       <a href="tel: +923125122488" id="phone-dr-asad" target= "_blank" rel="noopener noreferrer" className={styles.phone}><FaPhoneSquareAlt /></a>
                      </motion.div> 
                      <a href="tel: +923125122488" id="phone-dr-asad" target= "_blank" rel="noopener noreferrer" className={styles.p1}>0312-5122488</a>
                    </div>
                    <div className={styles.block2}>
                      <span> 06:00pm - 09:00pm</span>
                    </div>

                    <p className={styles.closed}><b>CLOSED:</b> <br/>Friday Morning and Sunday</p>
                  </div>
                </div>
              </div>
              <div>
                  <form ref={form} onSubmit={sendEmail} className={styles.col2}>
                  <input className={styles.input} type="text" name="name" placeholder='Your Full Name' pattern="[a-zA-Z][a-zA-Z ]{2,}" required />
                  <input type="tel" placeholder='Your Phone Number' id="phone" className={styles.input} name="phone" required pattern="[0-9]{11,15}"  title="Please enter digits only (11-15 numbers)"  onKeyDown={(e) => { // Prevent non-numeric input
                  if (!/[0-9]|Backspace|Delete|Arrow/.test(e.key)) {e.preventDefault(); }}}/>
                  <input className={styles.input} type="email" name="email" placeholder='Your Email Address' required />
                  <textarea className={styles.input} name='message' rows='7' placeholder='Your Message' required/>
                  <button type='submit'className={styles.submit}>Send Message</button>
                  </ form>
              </div>

              <div className={styles.block1}>
                <h3 className={styles.h02}>Free consultation</h3>
                <div className={styles.col3}>
                 <div>
                    <div className={styles.li}>
                      <ul>
                        <li>Email us or use WhatsApp to call us.</li>
                        <li>Let us know about your health problems.</li>
                        <li>Send your lab reports (if any) over WhatsApp to the numbers we&apos;ve listed.</li>
                        <li>The drug regimen that will work best for you will be determined by us.</li>
                        <li>Use EasyPaisa, JazzCash, or bank accounts to pay for your medication costs.</li>
                        <li>Your medicines will be sent via courier from us.</li>
                      </ul>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>  
            
          </div>
          <div>
            <div className={styles.block3}>
              <div className={styles.block1}>
               <div>            
                  <h3 className={styles.h02}>Address</h3>
                  <p className={styles.p2}> Building # B-II 306, Street # 09,<br/>
                  Near Faisal School,<br/> Haaji Chowk,
                  Muslim Town,<br/> Rawalpindi.               
                  </p>
               </div>
               <div>            
                  <h5 className={styles.h02}>Follow Us</h5><br/>
                  <div className={styles.socials}>
                   <a href="https://www.youtube.com/c/ArshadHomeopathicClinicOfficial" className={styles.youtube} target='_blank' rel="noopener noreferrer"> <ImYoutube/></a>
                    <a  href="https://www.facebook.com/Arshad.H.Clinic" target= "_blank" rel="noopener noreferrer" className={styles.fb}> <FaFacebookSquare/> </a>
                   <a  href="https://www.instagram.com/arshadhc.official/" target= "_blank" rel="noopener noreferrer" className={styles.insta}> <GrInstagram/> </a>
                   <a href="https://www.tiktok.com/@arshadhomeoclinic" className={styles.tiktok} target='_blank' rel="noopener noreferrer"><FaTiktok /></a>
                  </div>               
                </div>
              </div>
              <div className={styles.mapdiv}>
               <small> <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3330.1071560786186!2d73.09019506780078!3d33.6285976234164!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x38dfeb328e26925b%3A0xda3edb8bce8c15cd!2sArshad%20Homeopathic%20Clinic%2C%20Building%3A%20B-II%20306%20Street%209%20Haji%20Chowk%2C%20opposite%20Saieen%20Jee%20Murgh%20Pulao%2C%20Muslim%20Town%2C%20Rawalpindi%2C%20Punjab%2046300%2C%20Pakistan!3m2!1d33.6287733!2d73.0899167!5e0!3m2!1sen!2sus!4v1659523831487!5m2!1sen!2sus" className={styles.iframe}></iframe></small>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
      
    </section>
  )
}

export default Contact
