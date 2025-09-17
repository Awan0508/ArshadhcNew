import styles from '../styles/aboutUs.module.css';
import Header from'../components/Header'
import DoctorsFooter from '../components/DoctorsFooter'
import BackgroundAnimation from '../components/BackgroundAnimation'
import Link from'next/link'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { motion } from 'framer-motion';
import ClientProviders from '../app/ClientProviders';


// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "Arshad Homeopathic Clinic | Best Homeopathic Treatment in Rawalpindi & Islamabad",
    description: "Trusted homeopathic clinic since 2006. Dr. Asma Arshad & Dr. Asad Awan specialize in chronic diseases, PCOS, arthritis, kidney stones & more. Natural, side-effect-free treatments.",
    keywords: "best homeopathic clinic Rawalpindi, homeopathic doctor Islamabad, PCOS treatment, fibroids homeopathy, rheumatoid arthritis cure, kidney stone treatment, fistula without surgery, thyroid homeopathic medicine, IBS treatment, ulcerative colitis, chronic disease specialist, female homeopathic doctor, Dr. Asma Arshad, Dr. Asad Awan, natural healing, homeopathy for infertility",
    openGraph: {
      title: "Arshad Homeopathic Clinic | Natural Healing Since 2006",
      description: "Expert homeopathic treatment for PCOS, arthritis, kidney stones, thyroid disorders and chronic diseases in Rawalpindi-Islamabad.",
      type: "website",
      url: "https://www.arshadhc.com/aboutUs",
      images: [
        {
          url: "https://www.arshadhc.com/images/clinic-profile.jpg",
          width: 1200,
          height: 630,
          alt: "Arshad Homeopathic Clinic Profile",
        },
      ],
    },
    alternates: {
      canonical: "https://www.arshadhc.com/aboutUs",
    },
  };
}



  



const aboutUs = () => {
  // Page-specific schema (Organization schema for About Us page)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arshad Homeopathic Clinic",
    description: "Trusted homeopathic clinic since 2006 specializing in chronic and acute diseases in Rawalpindi-Islamabad",
    url: "https://www.arshadhc.com",
    logo: "https://www.arshadhc.com/images/clinic-logo.jpg",
    foundingDate: "2006",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Building 306, Street 09",
      addressLocality: "Muslim Town, Rawalpindi",
      addressRegion: "Punjab",
      postalCode: "46000",
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+923329622164",
        contactType: "Customer Service",
        contactOption: "WhatsApp",
        areaServed: "PK",
      },
      {
        "@type": "ContactPoint",
        telephone: "+923125122488",
        contactType: "Customer Service",
        contactOption: "WhatsApp",
        areaServed: "PK",
      },
    ],
    sameAs: [
      "https://www.facebook.com/Arshad.H.Clinic?mibextid=ZbWKwL", // Update to real link
      "https://www.youtube.com/c/ArshadHomeopathicClinicOfficial",
      "https://www.instagram.com/arshadhc.official/?hl=en",
      "https://www.tiktok.com/@arshadhomeoclinic", // Update to real link
    ],
  };

  // Sanitize JSON to prevent XSS (same as layout)
  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (

    <section>
        <BackgroundAnimation />
        <Header />
        {/* Inject page-specific JSON-LD schema here (after common elements from layout) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJson(organizationSchema) }}
        key="organization-schema"
      />

  <div className={styles.container}>

  <div className={styles.main}>
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.heroText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.clinicTitle}>Arshad Homeopathic Clinic</h1>
          <div className={styles.titleDivider}></div>
          <p className={styles.clinicSubtitle}>Trusted Natural Healing in Rawalpindi & Islamabad Since 2006</p>
        </motion.div>
        
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <motion.div
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            <h2 className={styles.sectionTitle}>Why Choose Our Homeopathic Treatment?</h2> 
          
           <p className={styles.introParagraph}>
                Many believe homeopathy is a <span className={styles.highlight}>slow or weak treatment</span>, 
                but clinical evidence reveals a different reality
              </p>
          </motion.div>
          
          <div className={styles.aboutContent}>
            <motion.div 
              className={styles.aboutText}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >             
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>⚡</div>
                  <h4>Rapid Relief</h4>
                  <p>Effective treatment for acute illnesses including fevers, infections, and acute pain</p>
                </div>
                
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🎯</div>
                  <h4>Remarkable Results</h4>
                  <p>Significant improvements in chronic disorders and long-term health conditions</p>
                </div>
                
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🛡️</div>
                  <h4>No Side Effects</h4>
                  <p>Completely safe for all ages - from infants to seniors</p>
                </div>
                
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🌿</div>
                  <h4>Holistic Healing</h4>
                  <p>Comprehensive approach addressing root causes rather than symptoms</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.philosophySection}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className={styles.philosophyHeader}>
                <h3 className={styles.philosophyTitle}>Our Success Philosophy</h3>
                <p className={styles.philosophySubtitle}>The "3 Rights" Approach to Healing</p>
              </div>
              
              <div className={styles.philosophySteps}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Right Symptoms Analysis</h4>
                    <p>Comprehensive case taking and detailed symptom analysis</p>
                  </div>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4>Right Medicine Selection</h4>
                    <p>Precision-based remedy matching using proven methodologies</p>
                  </div>
                </div>
                
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4>Right Potency Determination</h4>
                    <p>Customized dosage and potency for optimal therapeutic response</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

        <div className={styles.doctors}>
          <h2 className={styles.sectionTitle}>Meet Our Expert Homeopathic Doctors</h2>
          
          <div className={styles.doctorsGrid}>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage}>
                <img src="/images/dr-asma-arshad.jpg" alt="Dr. Mrs. Asma Arshad" />
              </div>
              <div className={styles.doctorInfo}>
                <h3>Dr. Mrs. Asma Arshad</h3>
                <div className={styles.meta}>
                  <span className={styles.metaItem}><strong>Practicing Since:</strong> 2006</span>
                  <span className={styles.metaItem}><strong>Qualifications:</strong> DHMS, Registered Practitioner</span>
                </div>
                <h4>Specialized Treatments:</h4>
                <ul className={styles.treatmentList}>
                  <li>Women's Health: PCOS, Fibroids, Infertility</li>
                  <li>Gastrointestinal: Ulcers, IBD, IBS, Fatty Liver</li>
                  <li>Tumors & Growths: Breast Lumps, Fibroadenomas</li>
                  <li>Kidney & Urinary: Kidney Stones, UTIs</li>
                  <li>Skin Diseases: Eczema, Psoriasis, Allergies</li>
                  <li>Chronic Conditions: Migraines, Asthma, Diabetes Support</li>
                  <li>Anal Conditions: Fistula, Piles, Fissures</li>
                </ul>
                <div className={styles.approach}>
                  <h4>Approach:</h4>
                  <p>Dr. Asma combines traditional homeopathy with modern diagnostic insights for personalized treatments that address root causes.</p>
                </div>
              </div>
            </div>

            <div className={styles.doctorCard}>
              <div className={styles.doctorImage}>
                <img src="/images/dr-asad-awan.jpg" alt="Dr. M. Asad Awan" />
              </div>
              <div className={styles.doctorInfo}>
                <h3>Dr. M. Asad Awan</h3>
                <div className={styles.meta}>
                  <span className={styles.metaItem}><strong>Practicing Since:</strong> 2004</span>
                  <span className={styles.metaItem}><strong>Qualifications:</strong> DHMS, Registered Practitioner</span>
                </div>
                <h4>Specialized Treatments:</h4>
                <ul className={styles.treatmentList}>
                  <li>Joint & Bone: Rheumatoid Arthritis, Gout, Back Pain</li>
                  <li>Digestive: Peptic Ulcers, GERD, IBD, IBS</li>
                  <li>Skin Diseases: Eczema, Psoriasis, Allergies</li>
                  <li>Kidney & Urinary: Kidney Stones, UTIs</li>
                  <li>Thyroid Disorders: Hypo/Hyperthyroidism</li>
                  <li>Anal Conditions: Fistula, Piles, Fissures</li>
                </ul>
                <div className={styles.approach}>
                  <h4>Approach:</h4>
                  <p>Dr. Asad focuses on pain management and metabolic restoration using advanced homeopathy, with expertise in non-surgical treatments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <h2 className={styles.sectionTitle}>Our Success Stories</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>18+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10,000+</span>
              <span className={styles.statLabel}>Patients Treated</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%+</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Side Effects</span>
            </div>
          </div>
        </div>

        <div className={styles.conditions}>
          <h2 className={styles.sectionTitle}>Conditions We Treat</h2>
          <div className={styles.conditionColumns}>
              <div className={styles.conditionCol}>
                <h3>Musculoskeletal</h3>
                <ul>
                  <li>Back Pain</li>
                  <li>Sciatica</li>
                  <li>Arthritis</li>
                  <li>Spinal Stenosis</li>
                </ul>
              </div>

              <div className={styles.conditionCol}>
                <h3>Proctological Conditions</h3>
                <ul>
                  <li>Anal Fistula</li>
                  <li>Fissure</li>
                  <li>Piles/Hemorrhoids</li>
                </ul>
              </div>
              <div className={styles.conditionCol}>
                <h3>Urological Disorders</h3>
                <ul>
                  <li>Kidney Stones</li>
                  <li>Urinary Tract Infections</li>
                  <li>Prostate Disorders</li>
                </ul>
              </div>

              <div className={styles.conditionCol}>
                <h3>Women's Health</h3>
                <ul>
                  <li>PCOS</li>
                  <li>Fibroids</li>
                  <li>Ovarian Cysts</li>
                  <li>Infertility</li>
                </ul>
              </div>
              <div className={styles.conditionCol}>
                <h3>Digestive Health</h3>
                <ul>
                  <li>Ulcerative Colitis</li>
                  <li>Crohn's Disease</li>
                  <li>IBS</li>
                  <li>Fatty Liver</li>
                </ul>
              </div>
              
              <div className={styles.conditionCol}>
                <h3>Autoimmune Disorders</h3>
                <ul>
                  <li>Rheumatoid Arthritis</li>
                  <li>Psoriasis</li>
                  <li>Thyroid Disorders</li>
                  <li>Vitiligo</li>
                </ul>
              </div>
           
          </div>
        </div>

        <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Ready for Natural Healing?</h2>
              <p className={styles.ctaText}>Book your consultation today and begin your journey to lasting wellness.</p>
              <div className={styles.ctaButtons}>
                  <span className={styles.primaryButton}><strong className={styles.nameBg}>Dr. Asma ARshad</strong> <br/>
                  <a href="tel:+923329622164" className={styles.call} target="_blank" rel="noopener noreferrer"
                  id="phone-dr-asma" 
                  data-doctor="dr_asma"
                  data-type="phone"
                  >Call : +92-332-9622164</a><br/>
                  <a href="https://wa.me/923329622164" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}
                  id="whatsApp-dr-asma"
                  data-doctor="dr_asma"
                  data-type="whatsapp"
                  > WhatsApp : +92-332-9622164 </a>
                  </span>

                  <span className={styles.primaryButton}><strong className={styles.nameBg}>Dr. Asad Awan</strong> <br/>
                  <a href="tel:+923125122488" className={styles.call} target="_blank" rel="noopener noreferrer"
                  id="phone-dr-asad" 
                  data-doctor="dr_asad"
                  data-type="phone"
                  >Call: +92-312-5122488</a><br/>
                  <a  href="https://api.whatsapp.com/send?phone=923125122488" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}
                  id="whatsApp-dr-asad"
                  data-doctor="dr_asad"
                  data-type="whatsapp"
                  > WhatsApp : +92-312-5122488 </a>
                  </span>
              </div>
              <div className={styles.clinicInfo}>
                  <p><strong>Address:</strong> Building: B-II 306, Street # 9, Opposite Meezan Bank, Adjacent to Faisal Schools (Boys Campus), Haji Chowk, Muslim Town, Rawalpindi</p>
                  <p><strong>Contact Timings:</strong> 9:00 A.M - 9:00 P.M</p>
              </div>
            </div>
      </div>
    </div>
     <div className={styles.Arrows}>
        <Link href="/contactUs" passHref className={styles.a}><BsFillArrowLeftCircleFill/>
        </Link>
        <Link href="/homeopathic-ibs-treatment" passHref className={styles.a}><BsFillArrowRightCircleFill/>
        </Link>
      </div>
    <DoctorsFooter/>
    <ClientProviders/> 
    </section>
  );
};

export default aboutUs;