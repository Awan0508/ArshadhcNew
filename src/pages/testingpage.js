import styles from '../styles/about.module.css'
import { FaAward, FaClinicMedical, FaHandHoldingHeart } from 'react-icons/fa'
import { TbStethoscope, TbHeartbeat } from 'react-icons/tb'
import { IoIosRibbon } from 'react-icons/io'

const About = () => {
  return (
    <section id="about" className={styles.section}>
      {/* Background decorative elements */}
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.preTitle}>Get To Know</div>
          <h2 className={styles.title}>About Our Clinic</h2>
          <div className={styles.underline}></div>
          <p className={styles.introText}>
            Arshad Homeopathic Clinic is one of the leading homeopathic practices in the Rawalpindi-Islamabad region. 
            Founded in 2006, we have successfully treated thousands of patients with a wide range of health conditions.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.aboutText}>
            <p>
              Contrary to common misconceptions, homeopathic treatment is not only effective for acute diseases but also 
              delivers remarkable results for chronic and life-threatening disorders. Our philosophy is simple: 
              identify the right symptoms, select the right medicine, and apply the right potency.
            </p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>18+</div>
                <div className={styles.statLabel}>Years of Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>5000+</div>
                <div className={styles.statLabel}>Patients Treated</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Conditions Treated</div>
              </div>
            </div>
          </div>

          <div className={styles.doctorsSection}>
            <h3 className={styles.doctorsTitle}>Our Expert Practitioners</h3>
            
            <div className={styles.doctorsGrid}>
              {/* Doctor 1 */}
              <div className={styles.doctorCard}>
                <div className={styles.doctorImage}>
                  <img src='/images/dr-asma-arshad.jpg' alt="Dr. Mrs. Asma Arshad" />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.doctorInfo}>
                  <h4>Dr. Mrs. Asma Arshad</h4>
                  <p>Homeopathic Specialist</p>
                  <div className={styles.doctorDetails}>
                    <div className={styles.detailItem}>
                      <FaAward className={styles.detailIcon} />
                      <span>Practicing since 2006</span>
                    </div>
                    <div className={styles.detailItem}>
                      <TbStethoscope className={styles.detailIcon} />
                      <span>Registered Practitioner</span>
                    </div>
                  </div>
                  
                  <div className={styles.specializations}>
                    <h5>Specializations:</h5>
                    <ul>
                      <li>Fistula</li>
                      <li>PCOS</li>
                      <li>Fibroids</li>
                      <li>Ovarian Cysts</li>
                      <li>Breast Tumors</li>
                      <li>Fatty Liver</li>
                      <li>Infertility</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Doctor 2 */}
              <div className={styles.doctorCard}>
                <div className={styles.doctorImage}>
                  <img src='/images/dr-asad-awan.jpg' alt="Dr. M. Asad Awan" />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.doctorInfo}>
                  <h4>Dr. M. Asad Awan</h4>
                  <p>Homeopathic Physician</p>
                  <div className={styles.doctorDetails}>
                    <div className={styles.detailItem}>
                      <FaAward className={styles.detailIcon} />
                      <span>Practicing since 2004</span>
                    </div>
                    <div className={styles.detailItem}>
                      <TbStethoscope className={styles.detailIcon} />
                      <span>Registered Practitioner</span>
                    </div>
                  </div>
                  
                  <div className={styles.specializations}>
                    <h5>Specializations:</h5>
                    <ul>
                      <li>Anal Fistula</li>
                      <li>Fatty Liver</li>
                      <li>Rheumatoid Arthritis</li>
                      <li>Peptic Ulcer</li>
                      <li>IBD/IBS</li>
                      <li>Kidney Stones</li>
                      <li>Thyroid Disorders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.clinicFeatures}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaHandHoldingHeart />
            </div>
            <h4>Holistic Healing</h4>
            <p>We treat the root cause of illness, not just the symptoms, for lasting results.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <IoIosRibbon />
            </div>
            <h4>Proven Results</h4>
            <p>With thousands of successful treatments, our methods have stood the test of time.</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaClinicMedical />
            </div>
            <h4>Established Practice</h4>
            <p>Serving the community with trusted homeopathic care since 2006.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About