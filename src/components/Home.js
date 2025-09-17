"use client";

import styles from '../styles/Home.module.css';
import CTA from '../components/CTA';
import { motion } from "framer-motion";

const Home = () => {
  

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>       
        <div className={styles.heroContainer}>
          {/* Clinic Name - Top Center */}
          <motion.div 
            className={styles.clinicNameContainer}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.clinicName}>Arshad Homeopathic Clinic</h1>
            <div className={styles.divider}></div>
            <p className={styles.tagline}>Natural Healing for Lasting Wellness</p>
          </motion.div>

          {/* Award Badge - Below Clinic Name */}
          <motion.div 
            className={styles.awardBadge}
            initial={{ scale: 0, scaleX: 1 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100, damping: 10 }}
          >
            <span>Rawalpindi's Leading Homeopathic Clinic - Exceptional Care, Extraordinary Results</span>
          </motion.div>

          {/* Middle Image - Between Award Badge and Quote */}
            <motion.div 
              className={styles.middleImageContainer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <img 
                src="/images/ArshadhcDrops.png" 
                alt="Homeopathic Medicine" 
                className={styles.middleImage}
              />
            </motion.div>


          {/* Quote and Image in Flex Layout - Middle Section */}
          <div className={styles.middleSection}>
            <motion.div 
              className={styles.quoteSection}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className={styles.quote}>A single homeopathic formulation can initiate profound therapeutic transformations, restoring balance to mind and body.</p>
            </motion.div>
          </div>

          {/* CTA - Bottom Center */}
          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <CTA />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <motion.section 
        className={styles.trustIndicators}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Why Choose Our Clinic?</h2>
          <p>Experience the difference of personalized homeopathic care</p>
        </div>
        
        <div className={styles.trustGrid}>
          <motion.div 
            className={styles.trustItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.trustIcon}>🌿</div>
            <h4>100% Natural</h4>
            <p>Pure homeopathic remedies with no side effects</p>
          </motion.div>
          
          <motion.div 
            className={styles.trustItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.trustIcon}>👪</div>
            <h4>Family Care</h4>
            <p>Treating all ages from children to seniors</p>
          </motion.div>
          
          <motion.div 
            className={styles.trustItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.trustIcon}>⏰</div>
            <h4>18+ Years Experience</h4>
            <p>Expertise in homeopathic practice</p>
          </motion.div>
          
          <motion.div 
            className={styles.trustItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.trustIcon}>💯</div>
            <h4>Proven Results</h4>
            <p>Thousands of satisfied patients</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Specialties */}
      <section className={styles.specialties}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Our Treatment Specialties</h2>
          <p>Comprehensive homeopathic solutions for various health conditions</p>
        </div>
        
        <div className={styles.specialtiesGrid}>
          <motion.div 
            className={styles.specialtyItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4>Women's Health</h4>
            <p>PCOS, Fibroids, Ovary Cyst, Breast Tumor, Infertility, Menstrual Disorders</p>
          </motion.div>
          
          <motion.div 
            className={styles.specialtyItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4>Digestive Disorders</h4>
            <p>IBD, IBS, Ulcer, Peptic Ulcer, Fatty Liver, Gastrointestinal Issues</p>
          </motion.div>
          
          <motion.div 
            className={styles.specialtyItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4>Chronic Conditions</h4>
            <p>Fistula, Kidney Stone, Thyroids, Skin Diseases, Rheumatoid Arthritis</p>
          </motion.div>
          
          <motion.div 
            className={styles.specialtyItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h4>Autoimmune Disorders</h4>
            <p>Natural approaches to immune system balance and autoimmune conditions</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home;