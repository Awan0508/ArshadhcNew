// components/DoctorsFooter.js
"use client"; // ← Add this line

import React from 'react';
import styles from '../styles/doctorsfooter.module.css';
import {motion} from 'framer-motion'

const DoctorsFooter = () => {
  const doctors = [
    {
      name: 'Dr. Mrs. Asma Arshad',
      mobile: '+92 332 9622164',
      whatsapp: '+92 332 9622164'
    },
    {
      name: 'Dr. M. Asad Awan',
      mobile: '+92 312 5122488',
      whatsapp: '+92 312 5122488'
    }
  ];

  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/${number.replace(/\D/g, '')}`, '_blank');
  };
const [active, setActive] = React.useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Doctor */}
        <div className={styles.doctorColumn}>
          <div className={styles.doctorInfo}>
            <span className={styles.doctorName}>{doctors[0].name}</span>
            <div className={styles.contactInfo}>
            <motion.div onClick= {() => setActive(!active) } 
              initial= {{opacity: 0.45}}
              animate= {{opacity: 1}}
              transition= {{type: 'spring', type: 'tween', duration:1, repeat: Infinity, repeatType: 'reverse' }}>
              <a 
                id="phone-dr-asma" 
                data-doctor="dr_asma"
                data-type="phone" // ← Added ID here
                href={`tel:${doctors[0].mobile.replace(/\D/g, '')}`} 
                className={styles.contactLink}
              >
                {doctors[0].mobile}
              </a>
              </motion.div> 
              

              <motion.div onClick= {() => setActive(!active) } 
              initial= {{opacity: 0.35}}
              animate= {{opacity: 1}}
              transition= {{type: 'spring', type: 'tween', duration:1, repeat: Infinity, repeatType: 'reverse' }}>
              <button 
                id="whatsApp-dr-asma"
                data-doctor="dr_asma"
                data-type="whatsapp" // ← Added ID here
                onClick={() => handleWhatsAppClick(doctors[0].whatsapp)}
                className={styles.whatsappButton}
              >
                WhatsApp
              </button>
              </motion.div> 

              
            </div>
          </div>
        </div>

        {/* Vertical Divider - Only visible on desktop */}
        <div className={styles.verticalDivider}></div>

        {/* Right Doctor */}
        <div className={styles.doctorColumn}>
          <div className={styles.doctorInfo}>
            <span className={styles.doctorName}>{doctors[1].name}</span>
            <div className={styles.contactInfo}>
            <motion.div onClick= {() => setActive(!active) } 
              initial= {{opacity: 0.45}}
              animate= {{opacity: 1}}
              transition= {{type: 'spring', type: 'tween', duration:1, repeat: Infinity, repeatType: 'reverse' }}>
              <a 
                id="phone-dr-asad" 
                data-doctor="dr_asad"
                data-type="phone" // ← Added ID here
                href={`tel:${doctors[1].mobile.replace(/\D/g, '')}`} 
                className={styles.contactLink}
              >
                {doctors[1].mobile}
              </a>
              </motion.div> 
              

              <motion.div onClick= {() => setActive(!active) } 
              initial= {{opacity: 0.35}}
              animate= {{opacity: 1}}
              transition= {{type: 'spring', type: 'tween', duration:1, repeat: Infinity, repeatType: 'reverse' }}>
              <button 
                id="whatsApp-dr-asad"
                data-doctor="dr_asad"
                data-type="whatsapp" // ← Added ID here
                onClick={() => handleWhatsAppClick(doctors[1].whatsapp)}
                className={styles.whatsappButton}
              >
                WhatsApp
              </button>
              </motion.div> 
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DoctorsFooter;