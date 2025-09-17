
import styles from '../styles/about.module.css'
import { FaWhatsappSquare } from "react-icons/fa"
import { FaPhoneSquareAlt } from "react-icons/fa";



const About = () => {
  return (
    <section className={styles.section}>
      <div id='about' className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>Get To Know</h3>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.intro}> Arshad Homeopathic Clinic is one of the leading and best homeopathic clinic in Rawalpindi Islamabad region. It is founded in 2006 and since then thousands of patients have been treated and get cured. There is a misconception in the society that Homeopathic treatment is less effective and very slow way of treatment. In fact it is not only effective in acute diseases but also having most remarkable results in chronic life threatening disorders. There is a philosophy behind the scene i.e. Pick the right symptoms and choose the right medicine with the right potency.</p>
        </div> 
        <div className={styles.comparisonGrid}>
          <div  className={styles.systemCard}>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('/images/dr-asma-arshad.jpg')" }}></div>
                <h3 className={styles.systemTitle}>Dr Mrs. Asma Arshad</h3>
                <p className={styles.systemDescription}><span className={styles.highlight}>Treating Acute and chronic disease </span>  Fistula, PCOS, Fibroids, Ovary Cyst, Breast Tumor, Fatty Liver, Infertility, Ulcer, IBD, IBS, Skin Disease</p>
                <div className={styles.icons}>
                    <a  href="https://wa.me/923329622164" id="whatsApp-dr-asma" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> <FaWhatsappSquare  /> </a>
                    <a href="tel: +923329622164" id="phone-dr-asma" target= "_blank" rel="noopener noreferrer" className={styles.phone}><FaPhoneSquareAlt /></a>
                </div>
              </div>
            </div>

              <div  className={styles.systemCard}>
              <div className={styles.doctorCard}>
                <div className={styles.doctorImage} style={{ backgroundImage: "url('/images/dr-asad-awan.jpg')" }}></div>
                <h3 className={styles.systemTitle}>Dr M. Asad Awan</h3>
                <p className={styles.systemDescription}><span className={styles.highlight}>Treating Acute and chronic disease </span>  Anal Fistula, Fatty Liver, Rheumatoid Arthritis, Peptic Ulcer, IBD, IBS, Kidney Stone, Thyroids, Infertility</p>
                <div className={styles.icons}>
                    <a  href="https://wa.me/923125122488" id="whatsApp-dr-asad" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> <FaWhatsappSquare  /> </a>
                    <a href="tel: +923125122488" id="phone-dr-asad" target= "_blank" rel="noopener noreferrer" className={styles.phone}><FaPhoneSquareAlt /></a>
                </div>
              </div>
            </div>
        </div>
        
      </div> 
    </section>
  )
}

export default About
